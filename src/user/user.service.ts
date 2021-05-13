import { Suspension_State_Insert_Input, Suspension_Type_Enum, User } from '../typings';
import { HasuraService } from '../hasura/hasura.service';
import { Injectable } from '@nestjs/common';
import { Config } from '../config/config';
import { createHash } from 'crypto';
import { Client } from 'minio';
import * as sharp from 'sharp';

@Injectable()
export class UserService {
  constructor(
    private readonly hasuraService: HasuraService,
    private readonly config: Config,
    private readonly minio: Client,
  ) {
  }

  readonly mediumPath = 'pictures/medium';
  readonly smallPath = 'pictures/small';

  async setUsername(user: User, username?: string): Promise<void> {
    await this.hasuraService.request({
      queryPath: './graphql/set-username.graphql',
      variables: {
        id: user.id,
        username: username ? username : `user-${user.id}`,
      },
    });
  }

  async setPicture(user: User, picture: Buffer): Promise<boolean> {
    await this.removePicture(user);

    const hash = createHash('md5').update(picture).digest('hex');
    const metadata = { 'Content-Type': 'image/webp' };
    const name = `${user.id}-${hash}.webp`;

    try {
      await Promise.all([
        this.minio.putObject(
          this.config.app.publicBucket,
          `${this.smallPath}/${name}`,
          await sharp(picture).resize({
            width: 100,
            height: 100,
            withoutEnlargement: true,
          }).webp({
            quality: 30,
            alphaQuality: 30,
          }).toBuffer(),
          metadata,
        ),

        this.minio.putObject(
          this.config.app.publicBucket,
          `${this.mediumPath}/${name}`,
          await sharp(picture).resize({
            width: 400,
            height: 400,
            withoutEnlargement: true,
          }).webp({
            quality: 50,
          }).toBuffer(),
          metadata,
        ),
      ]);
      await this.hasuraService.request({
        queryPath: './graphql/set-picture.graphql',
        variables: {
          id: user.id,
          value: name,
        },
      });
    } catch (e) {
      return false;
    }

    return true;
  }

  async removePicture(user: User, deleted = false): Promise<boolean> {
    try {
      await this.minio.removeObjects(
        this.config.app.publicBucket,
        [`${this.mediumPath}/${user.picture}`, `${this.smallPath}/${user.picture}`],
      );

      if (!deleted) {
        await this.hasuraService.request({
          queryPath: './graphql/set-picture.graphql',
          variables: {
            id: user.id,
            value: null,
          },
        });
      }
    } catch (e) {
      return false;
    }

    return true;
  }

  async delete(userId: number, reasonIds?: number[]): Promise<boolean> {
    const data: Suspension_State_Insert_Input = {
      user_id: userId,
      type: Suspension_Type_Enum.Deleted,
      created_at: new Date().toISOString(),
    };

    if (reasonIds) {
      data.state_reasons = {
        data: reasonIds.map(id => ({ reason_id: id })),
      };
    }

    try {
      await this.hasuraService.request({
        queryPath: './graphql/delete-user.graphql',
        variables: {
          data,
        },
      });
    } catch (e) {
      return false;
    }

    return true;
  }
}

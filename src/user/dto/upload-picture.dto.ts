import { IsInstance } from 'class-validator';

export class UploadPictureDto {
  @IsInstance(Buffer)
  file: Buffer;
}

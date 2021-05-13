# Qmmsoft

## Instructions
> NOTE: This instruction is only for development environment, for production environment follow the instruction given in **qmmsoft/stack** repository

##### 1. Clone this repository

```bash
git clone https://github.com/SaharaIT/qmmsoft.git
```

##### 2. Set necessary environment variables
* Create a text file in the root directory of this project
* Copy-past the contents below

```dotenv
  NODE_ENV=development
  APP_PORT=5000
  APP_KEY=fj654h8&)_*fjsk<y>jrt^%(*(2347~!@+{=-$%:fdlk;jrt4\327||5jd|9k[rtj
  
  # Database
  DB_HOST=127.0.0.1
  DB_PORT=5432
  DB_NAME=postgres
  DB_USER=postgres
  DB_PASSWORD=12345678
  
  # Hasura
  HASURA_PORT=5100
  HASURA_SECRET=12345678
  
  
  # Mail
  MAIL_HOST=<MAIL SERVER HOST>
  MAIL_PORT=<MAIL SERVER PORT>
  MAIL_USER=<MAIL USER>
  MAIL_PASSWORD=<MAIL PASSWORD>
  
  # SMS
  SMS_API=http://portal.smsinbd.com
  SMS_API_KEY=<API KEY>
  SMS_SENDER_ID=<SENDER ID>
```
* Save the file as `.env`

##### 3. Run services

```bash
npm start
```

#### Backend
http://localhost:5000

#### Graphql endpoint
http://localhost:5100/v1/graphql

# Hasura-NestJS Boilerplate

Hasura-NestJS is a boilerplate for creating a scalable and feature-rich Node.js backend using Hasura, NestJS, uWebSockets.js, Postgres, Redis, and Minio. It provides a ready-to-use foundation with pre-configured modules and functionalities such as websockets, authentication, recaptcha, Google authentication, registration, and more. The project aims to accelerate backend development by offering a solid architecture and a set of commonly used features.

## Architecture Overview

The architecture of Hasura-NestJS follows a modular approach, leveraging different technologies to handle specific functionalities. Here's a high-level overview of the modules and technologies used:

- **Hasura**: Hasura is a GraphQL engine that serves as the front-facing layer. Simple queries and mutations can be sent directly to Hasura, while more advanced mutations like login and registration are handled through Hasura Actions. Node.js, built with NestJS, sits behind Hasura and manages these actions. Hasura also employs the webhook authentication approach for authentication.

- **NestJS**: NestJS is a powerful Node.js framework for building efficient and scalable server-side applications. It provides a solid foundation for building modular and extensible applications using TypeScript.

- **uWebSockets.js**: uWebSockets.js is a highly scalable and efficient WebSocket library for Node.js. In this boilerplate, uWebSockets.js is integrated with NestJS through Nanoexpress, which uses uWebSockets.js internally and provides an Express-compatible API. This integration allows you to run the application in a Node.js cluster, with Redis used to share websocket sockets between processes.

- **Postgres**: Postgres is used as the database to store application data. The project utilizes Postgres schemas to organize tables effectively.

- **Redis**: Redis is an in-memory data store used for caching and other purposes. In this boilerplate, Redis is integrated using the ioredis package. It is used to store websocket sockets, blacklist access tokens, and share data between processes.

- **Minio**: Minio is used as a file storage solution in this boilerplate. It enables storing files such as profile pictures efficiently.

## Modules

Hasura-NestJS includes various modules that provide essential functionalities and utilities. Here's a brief overview of each module:

- **Config**: The Config module handles project configurations and parses the `.env` file using the `dotenv` package. It allows you to define and manage environment-specific variables for the project.

- **LibPn**: The LibPn module serves as a wrapper for the `libphonenumber.js` library, enabling mobile number verification capabilities.

- **Bcrypt**: The Bcrypt module is a wrapper for the `bcrypt` package, providing a convenient way to hash and compare passwords securely.

- **Minio**: The Minio module integrates the Minio client for file storage purposes. It allows you to store and retrieve files, such as user profile pictures.

- **Redis**: The Redis module integrates Redis into the application using the `ioredis` package. It provides functionalities for caching, data sharing between processes, and blacklisting access tokens.

- **Misc**: The Misc module includes various helper utilities and functions that are commonly used throughout the application.

- **Hasura**: The Hasura module facilitates communication between the upper layer (Hasura) and the Node.js backend. It allows running Hasura queries using a convenient interface.

- **Uws**: The Uws module provides an integration between uWebSockets.js and NestJS. It utilizes Nanoexpress, which offers an Express-compatible API with uWebSockets.js as the underlying library. This module enables efficient handling of WebSocket connections and clustering support.

- **Sms**: The Sms module handles sending SMS messages. It utilizes the NestJS `HttpService` for making HTTP requests to the desired SMS gateway. You can configure the module to work with your preferred SMS gateway.

- **Mail**: The Mail module handles sending emails. It uses the Nodemailer package, which provides a powerful and flexible email-sending solution. The module includes three email templates: `change-email`, `password-reset`, and `registration`.

- **Notification**: The Notification module manages all notification-related functionalities. It listens for changes in the notification table and forwards notifications to users through websockets.

- **Auth**: The Auth module handles user authentication. It provides two authentication methods:

  1. Username and password authentication: This method allows users to log in using their username and password. Upon successful login, a cookie is set, and a CSRF token is returned. For subsequent requests, the CSRF token must be included in the `x-csrf-token` header.

  2. Personal access token authentication: Users can create personal access tokens, which respond with an access token. Personal access tokens do not require a CSRF token for each request.

  The Auth module utilizes Redis to blacklist access tokens. When a user logs out, the token is blacklisted. Additionally, the application stores access tokens in the `auth.access_token` table. When a user is suspended or deleted, all associated tokens are automatically blacklisted.

- **Registration**: The Registration module handles user registration functionality. It provides the necessary logic for registering new users and storing their information securely.

- **ChangeModule**: The ChangeModule encompasses functionalities related to changing email, mobile numbers, passwords, and password resets. It ensures secure and seamless user account management.

- **Verification**: The Verification module provides functionalities for verifying mobile numbers and email addresses. It is also utilized during the password reset process.

## Getting Started

To use the Hasura-NestJS boilerplate, follow these steps:

1. Clone the repository: `git clone https://github.com/IbrahimAlKhalil/hasura-nestjs.git`

2. Create a `.env` file at the project root and configure it based on the provided `.env.example`. Set the necessary environment variables according to your setup.

3. Run the application locally by executing the following command in the terminal: `./index.js`. This script will automatically pull the required Docker images and launch the application.

4. Customize the boilerplate according to your project requirements. Utilize the pre-built modules and functionalities to accelerate your backend development.

## License

The Hasura-NestJS boilerplate is open-source and released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the codebase as per the terms of the license.

## Contact

If you have any questions or need further assistance, feel free to contact the project maintainer at hm.ibrahimalkhalil@gmail.com.
# Trampay API

This is an API made with Node.js, Nest.js and PostgreSQL.

## Description

API developed with the purpose of implementing authentication using JSON Web Token(JWT). The User entity might be thought as an employee or admin
of a company. The user will be able to upload client files only if authenticated. In order to test the API, you can download [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/). You can also test it with this [Front End App](https://github.com/leonardo-alm/App--Trampay).

## Run

Run npm install to install all dependencies<br /><br />
Create a .env file with the following variables:<br />

- POSTGRES_HOST=your postgres host number
- POSTGRES_PORT=your postgres port number
- POSTGRES_USER=your postgres username
- POSTGRES_PASSWORD=your postgres password
- POSTGRES_DATABASE=your postgres database name

- JWT_SECRET=a jwt secret you can create<br />

Run npm run start:dev to start the server

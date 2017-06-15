## Dependencies

-   Node 5.10.x or above
-   NPM 3.8.x or above
-   Express
-   Body-parser
-   Express
-   Knex
-   pg



## Getting Started

-   Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
-   Update the .env file with your correct local information
-   Install dependencies: `npm i`
-   Run migrations: `npm run knex migrate:latest`
-   Check the migrations folder to see what gets created in the DB
-   Run the seed: `npm run knex seed:run`
-   Check the seeds file to see what gets seeded in the DB
-   Run the server: `npm run local`
-   Visit `http://localhost:8080/`
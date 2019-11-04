# Manpower Management System

Nodejs + Typescript + Postgres + Redis

## Application Setup (Development)

1. Install Postgres, redis, nodejs.
2. Create database `man_dev` and `man_test`

```postgres
$ psql
psql (12.0.0)
Type "help" for help.

$ CREATE DATABASE man_dev;
$ CREATE DATABASE man_test;
```

```
npm install
npm run migrate:dev
npm run start:dev
```

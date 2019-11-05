# Manpower Management System

> Nodejs + Typescript + Postgres + Redis

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Application Setup (Development)

1. Install Postgres, redis, nodejs.
2. Create database `man_dev` and `man_test`
```postgres
$ psql
psql (12.0.0)
Type "help" for help.

CREATE DATABASE man_dev;
CREATE DATABASE man_test;
```

```
npm install
npm run migrate:dev
npm run start:dev
```

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

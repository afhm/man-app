# Manpower Management System

> Nodejs + Typescript + Postgres + Redis

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
 [![Build Status](https://travis-ci.com/afhm/man-app.svg?token=afLFLt5nuAtxSy7f9pp7&branch=master)](https://travis-ci.com/afhm/man-app)

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

### Built with

#### Backend

- [Tabel](https://github.com/fractaltech/tabel) - ORM for Node.js
- [Express.js](https://expressjs.com/) - Lightweight webserver
- [Redis](https://redis.io/) - For holding onto JWT tokens and refresh tokens

#### Frontend

- Angular (WIP)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

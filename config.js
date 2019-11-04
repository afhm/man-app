module.exports = {
  server: {
    host: '0.0.0.0',
    port: 3000,
    env: 'development',
    baseUrl: 'http://localhost:3000/api/v1/',
    baseFolder: require('./configdb')._BASE_FOLDER
  },

  client: {
    host: 'localhost:3000',
    referer: [
      'http://localhost:4200/',
      'http://localhost:4300/',
      'http://192.168.43.163:4200/',
      'http://192.168.2.6:4200/',
      'http://169.254.30.4:4200/'
    ]
  },

  // aws: {
  //   dev: {
  //     privateKeyPath: '/Users/sushinpv/Documents/Server\ Keys/TGA/AWS/pk-APKAJBS26LQZGQLGTJRQ.pem',
  //     keyPairID: 'APKAJBS26LQZGQLGTJRQ',
  //     CloudfrontUrl: 'https://d30td9wseux77f.cloudfront.net/',
  //   },
  //   prod: {
  //     privateKeyPath: '/Users/sushinpv/Documents/Server\ Keys/TGA/TGA_PROD/pk-APKAJNEK6URYZFOIZHSA.pem',
  //     keyPairID: 'APKAJNEK6URYZFOIZHSA',
  //     CloudfrontUrl: 'https://dtrf6v05dfhc2.cloudfront.net/',
  //   }
  // },

  api: {
    version: '1'
  },

  orm: {
    db: {
      client: 'postgresql',
      connection: {
        database: 'man_prod',
        host: 'localhost',
        port: 5432,
        user: require('./configdb')._DB_USERNAME,
        password: require('./configdb')._DB_PASSWORD
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: 'knex_migrations'
    }, // redis config is optional, is used for caching by tabel
    redis: {
      host: 'localhost',
      port: '6379',
      keyPrefix: 'tga.api.'
    }
  },

  mongo_db: {
    _url: 'mongodb://localhost:27017/tga'
  },

  // notification: {
  //   emailConfig: {
  //     username: 'no.replay@thegateacademy.com',
  //     password: '123456789'
  //   },

  //   smsConfig: {
  //     authKey: '198797AhCPkvkSK8bm5bc587eb'
  //   },

  //   webPushConfig: {
  //     publicKey: 'BGlNgysWhDggTgfnPFfVuNfLAcO-emTTLzKvwf0n1C7ZMpxG8kGMmPQZsqIg-fpaW3WujqQRNLEzQkESz6VJ7Lg',
  //     privateKey: 'L4mzoSd64yWvI1NaDk67GL4cf4LRmYQpoVkwvFzRTMs'
  //   },

  //   sendGridConfig: {
  //     apiKey: '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'
  //   },
  //   mailInBlue: {
  //     authKey: 'Jq5FpPyQGNkxV1ZM'
  //   }
  // },

  backend: {
    url: 'http://localhost:3000'
  },

  auth: {
    // 10min
    _JWT_KEY: '95EAFBF35A8DF5C9A749EF293A1F1',
    tokenLifetime: '10min',
    urlSecretKey: 'DF5C9A749EF293A1F195EAFBF35A8'
  },

  headers: {
    authToken: 'auth-token',
    refreshToken: 'refresh-token',
    fingerPrint: 'finger-print'
  }

}

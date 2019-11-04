const migrate = require('tabel/lib/migrate');
const ormConfig = require('shared/infra/database/orm/config'); // the same config as shown in "Setting up"

migrate(ormConfig);

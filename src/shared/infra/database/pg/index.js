const { Client } = require("pg");
const config = require("../orm/config").db.connection;
const client = new Client({
  database: config.database,
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
});

function initConnection() {
  client
    .connect()
    .then(() => console.error("[DB]: connected"))
    .catch(e => console.error("connection error", e.stack));

  // eslint-disable-next-line quotes
  client.query('LISTEN "onNewStudent"');

  // client.query('LISTEN new_notification', (err, res) => {
  //   // console.log(err, res);
  // });

  // // const validateNotification = require('../../util/notificationService/instantNotifications');

  // client.on('notification', (msg) => {
  //   let payload = JSON.parse(msg.payload);
  //   // console.log(payload);
  //   // validateNotification();
  // });
}

function pgQuery(queryString, values) {
  return client.query(queryString, values);
}

module.exports = {
  pgQuery,
  initConnection,
};

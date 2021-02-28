

const express = require('express');
const config = require('./config/config');
const db = require('./app/models');

const app = express();

module.exports = require('./config/express')(app, config);

db.sequelize
  .sync()
  .then(() => {

    if (!module.parent) {
      app.listen(config.port, () => {
        console.log('Express server listening on port ' + config.port);

        db.sequelize
          .authenticate()
          .then(function (err) {
            console.log('Connection has been established successfully.');
          })
          .catch(function (err) {
            console.log('Unable to connect to the database:', err);
          });
      });
    }
  }).catch((e) => {
    console.log("db sync failed");
    throw new Error(e);
  });


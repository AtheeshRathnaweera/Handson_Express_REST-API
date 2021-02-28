const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'studentmanagementbackend'
    },
    port: process.env.PORT || 3000,
    db_name: 'studentmanagementbackend-development',
    db_user: 'root',
    db_pw: '',
    db_port: 3308,
    TOKEN_SECRET:'7bc78545b1a3923cc1e1e19523fd5c3f20b409509'
  },

  test: {
    root: rootPath,
    app: {
      name: 'studentmanagementbackend'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost:3306/test?user=root&password='
  },

  production: {
    root: rootPath,
    app: {
      name: 'studentmanagementbackend'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost:3306/test?user=root&password='
  }
};

module.exports = config[env];

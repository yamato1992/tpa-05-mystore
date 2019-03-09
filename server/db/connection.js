const mysql = require('mysql2/promise');

module.exports = {
  getConnection: async() => {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'my_store',
    });

    return connection;
  },
};

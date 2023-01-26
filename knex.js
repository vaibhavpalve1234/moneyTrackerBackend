require('dotenv').config();
module.exports = {
    local: {
      client: 'mysql',
      useNullAsDefault: true,
      migrations: {
        directory: './server/migrations',
      },
      connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'my_db',
      },
    }
}
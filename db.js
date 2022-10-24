const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  database: 'my_db',
  password: 'password',
  port: 5432,
  host: 'postgres.test.greetings.local'   // from AWS VPC network
  //host: '172.17.0.2'   // from Docker network
})

module.exports = { pool };
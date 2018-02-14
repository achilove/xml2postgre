const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:postgres@localhost:5432/military'

const pool = new Pool({
  connectionString: connectionString,
})

const client = new Client({
  connectionString: connectionString,
})
client.connect()

module.exports = client;

const {Pool} = require('pg')
require('dotenv').config()


db = new Pool({
    connectionString: process.env.DB_URL
})

module.exports = db
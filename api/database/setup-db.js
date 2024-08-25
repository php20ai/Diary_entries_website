const fs = require('fs')
require('dotenv').config()
db = require('./connect')


db.query(fs.readFileSync('./database/data.sql').toString()).then(data => console.log("DB Set Up Complete")).catch(err => console.log("The error is : ", err))
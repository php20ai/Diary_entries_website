const express = require('express')
require('dotenv').config()
const cors = require('cors')
const server = express()


server.use(cors())

server.get('/', (req,res)=>
    res.send("The sky is beautiful and the Earth is beautiful"))


module.exports = server

const express = require('express')
require('dotenv').config()
const cors = require('cors')
const entriesRouter = require('./routers/entriesRouter.js')
const server = express()


server.use(cors())

server.get('/', (req,res)=>
    res.send("The sky is beautiful and the Earth is beautiful"))
server.use('/entries', entriesRouter)

module.exports = server

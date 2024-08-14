const express = require('express')
const server = require('./server')
require('dotenv').config()
port = process.env.PORT


server.listen(port, (req,res)=>
    console.log("Server is listening at port number: ", port))


const express = require('express')
require('dotenv').config()
const cors = require('cors')
const entriesRouter = require('./routers/entriesRouter.js')
const server = express()
const bcrypt = require('bcrypt') 
const users = []

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', (req,res)=>
    res.send("The sky is beautiful and the Earth is beautiful"))

server.get('/users', (req,res) => {
  res.json(users)  
})

server.post('/users', async (req,res) => {
    try{

        
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        console.log(hashedPassword)
        const user = { name:req.body.name, password:hashedPassword}
        users.push(user)
        res.status(201).send()

    } catch{
        res.status(500).send()
    }


})

server.post('/users/login', async (req,res) => {
    const user=users.find(user => user.name = req.body.name)
    if (user == null){
        return res.status(400).send('Cannot find user')

    }
    try{

        if (await bcrypt.compare(req.body.password, user.password)){

           res.send('Success') 

        } else {
           res.send('User credentials is not in Database')
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        console.log(hashedPassword)
        const user = { name:req.body.name, password:hashedPassword}
        users.push(user)
        console.log(user)
        res.status(201).send()

    } catch{
        res.status(500).send()
    }


})
server.use('/entries', entriesRouter)

module.exports = server

const { json } = require('express')
const Entries = require('../models/Entries.js')

const index = async (req, res) =>{
    try{
        console.log("index")
        result = await Entries.index()
        res.status(200).json(result)
    } catch(err){
        res.status(500).send({"err": err})
    }


}
console.log("In Controller")
const showById = async (req, res) =>{
    console.log("In line 17 Controller")
    try{
        console.log("In line 19 Controller")
        id = req.params.id
        result = await Entries.obtainOneById(id)
        console.log("In line 22 Controller")
        res.status(200).send(result)
    } catch(err){
        console.log("In line 15 Controller")
        res.status(404).send({"error": err})
    }


}

const create = async (req, res) =>{
    console.log(req.body)
    try{
        console.log("In line 19 Controller")
        data = req.body
        console.log("a")
        title = data.title
        description = data.description
        author = data.author
        console.log(author)
        console.log("controller 41 41")
        result = await Entries.create(title, description, author)
        
        console.log("In line 22 Controller")
        res.status(201).send(`Entry has been successfully created and stored in diaries entry table as ${result}.`)
    } catch(err){
        console.log("In line 41, in Controllers")
        res.status(404).send({"error": err})
    }
}

const update = async (req, res) =>{
    console.log(req.body)
    try{
        console.log("In line 19 Controller")
        id = req.params.id
        data = req.body
        title = data.title
        console.log("title:", title)
        description = data.description
        author = data.author
        console.log(author)
        console.log("controller 41 41")
        entry = await Entries.obtainOneById(id)
        console.log("entry is:", entry)
        result = await entry.update(title, author, description) 
        console.log("In line 22 Controller")
        res.status(201).send(`Entry has been successfully updated in diaries entry table as ${result}.`)
    } catch(err){
        console.log("In line 41, in Controllers")
        res.status(404).send({"error": err})
    }
}

const eliminate = async (req, res) =>{
    console.log(req.body)
    try{
        console.log("In line 19 Controller")
        id = req.params.id
        console.log("id is:", id)
        const entry = await Entries.obtainOneById(id)
        console.log("entry is:", entry)
        result = await entry.delete() 
        console.log("In line 22 Controller")
        res.status(204).end()
    } catch(err){
        console.log("In line 41, in Controllers")
        res.status(404).json({"error": err})
    }

}
    

module.exports = {index, showById, create, update, eliminate}
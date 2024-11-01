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

module.exports = {index, showById}
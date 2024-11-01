const { json } = require('express')
const Entries = require('../models/Entries.js')

const index = async (req, res) =>{
    try{
        console.log("index")
        result = await Entries.index()
        res.status(200).send(result)
    } catch(err){
        res.status(500).send({"err": err})
    }


}

const showById = async (req, res) =>{
    try{
        id = req.params.id
        result = await Entries.obtainOneById(id)
        res.status(200).send(result)
    } catch(err){
        res.status(404).send({"error": err})
    }


}

module.exports = {index, showById}
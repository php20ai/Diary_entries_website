const db = require('../database/connect.js')
require('dotenv').config()
class Entries {
    constructor(entries_object){
        this.entry_id = entries_object.entry_id
        this.title = entries_object.title
        this.description = entries_object.description
        this.author = entries_object.author
        this.time = entries_object.time
        this.date = entries_object.date

    }

    static async index(){
        console.log("In index model")
        const result = await db.query('SELECT * FROM diary_entries;')
        console.log("In index model, line 15")
        console.log("Result is: ",  result)
        if (result.rows.length===0){
            console.log("In model, line 18:")
            throw new Error("Error located at Server.")

        } else{
          console.log("In model, line 22:")
          return result.rows.map(entry => new Entries(entry))
        }
    }

    static async obtainOneById(id){
        console.log("In line 30 Model")
        const result = await db.query('SELECT * FROM diary_entries WHERE entry_id=$1;', [id])
        console.log("In line 332 Model")
        if (result.rows.length!==1){
            throw new Error(`There are either no rows with id=${id} or multiple rows with id=${id}.`)
        } else{
          return new Entries(result.rows[0])
        }
    }

    static async create({entry_id, title, description, author}){
        console.log("In line 30 Model")
        const result = await db.query('INSERT INTO diary_entries (entry_id, title, description, author) VALUES ($1, $2, $3, $4)', [entry_id, title, description, author])
        console.log("In line 332 Model")
        if (result.rows.length!==1){
            throw new Error(`There are either no rows with id=${id} or multiple rows with id=${id}.`)
        } else{
          return new Entries(result.rows[0])
        }
    }

}

module.exports = Entries
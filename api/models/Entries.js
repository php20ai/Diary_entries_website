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
        console.log("This is result: ", result)
        console.log("In line 332 Model")
        if (result.rows.length!==1){
            throw new Error(`There are either no rows with id=${id} or multiple rows with id=${id}.`)
        } else{
          return new Entries(result.rows[0])
        }
    }

    static async create(title, description, author){
        console.log("In model line 41")
        const result = await db.query('INSERT INTO diary_entries (title, description, author) VALUES ($1, $2, $3) RETURNING *', [title, description, author])
        console.log("In line 44 Model")
        if (result.rows == 0){
            throw new Error('Not able to create diary entry in diary_entries table.')
        } else {
            return new Entries(result.rows[0])
        }           
    }


    async update(title, author, description){
        console.log("In model line 41")
        const result = await db.query('UPDATE diary_entries SET title=$1, description=$2, author=$3 WHERE entry_id=$4 RETURNING *', [title, description, author, this.entry_id])
        
        console.log("result in model is:", result)
        console.log("In line 44 Model")
        if (result.rows == 0){
            throw new Error('Not able to update row in diary_entries table.')
        } else {
            return new Entries(result.rows[0])
        }           
    }

    async delete(){
        console.log("In model line 41")
        const result = await db.query('DELETE FROM diary_entries WHERE entry_id=$1 returning *', [this.entry_id])
        console.log("result.rows is:", result.rows[0])
        return new Entries(result.rows[0])      
    }

}

module.exports = Entries
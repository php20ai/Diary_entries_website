const express = require('express')
const {index, showById, create, update, eliminate} = require('../controllers/entriesController.js')
entriesRouter = express.Router()

entriesRouter.get('/', index)

entriesRouter.get('/:id', showById)


entriesRouter.post('/', create)

entriesRouter.patch('/:id', update)



entriesRouter.delete('/:id', eliminate)



module.exports = entriesRouter
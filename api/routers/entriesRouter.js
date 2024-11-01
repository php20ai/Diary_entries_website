const express = require('express')
const {index, showById} = require('../controllers/entriesController.js')
entriesRouter = express.Router()

entriesRouter.get('/', index)

entriesRouter.get('/:id', showById)

module.exports = entriesRouter
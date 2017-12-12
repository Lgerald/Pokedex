const indexRouter = require('express').Router()
//const {db} = require('../models')
//do i need the db on this page???

indexRouter.get("/", (req,res,next) =>{
    res.send("hello world")
})

indexRouter.get("/pokemon", require('./pokemon'))
indexRouter.get("/region", require('./region'))
indexRouter.get('/team', require('./teams'))


module.exports = indexRouter
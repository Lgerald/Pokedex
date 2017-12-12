const regionRouter = require('express').Router()
const {db, Region} = require('../models')

//GET
//all the regions
regionRouter.get("/", (req,res,next) => {
    Region.findAll(req.body)
    .then(regions => res.status(200).json(regions))
})
//one region
regionRouter.get("/:id", (res,req,next) => {
    Region.findById(req.params.id)
    .then(region => res.status(200).json(region))
})


module.exports = regionRouter
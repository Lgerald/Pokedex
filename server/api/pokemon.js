const pokeRouter = require('express').Router()
const {db, Pokemon} = require('../models')

//GET
//all the pokemans
pokeRouter.get("/", (req,res,next) => {
    Pokemon.findAll(req.body)
    .then(pokemans => res.status(200).json(pokemans))
})
//one pokeman
pokeRouter.get("/:id", (req,res,next) => {
    Pokemon.findById(req.params.id)
    .then(pokemon => res.json(pokemon))
})



module.exports = pokeRouter
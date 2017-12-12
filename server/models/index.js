const Sequelize = require('sequelize')
const db = require('../db')

const Pokemon = require('./pokemon')
const Attack = require('./attack')
const Region = require('./region')
const Teams = require('./teams')

Pokemon.belongsTo(Region) //every pokemon belongs to a region
Region.hasMany(Pokemon) // regions have many pokemon

Attack.belongsToMany(Pokemon, {through: "attackList"}) // maybe attack list will be a seperate table?
Pokemon.hasMany(Attack) // a pokemon can have many attacks
Pokemon.belongsToMany(Teams, {through: "partyMember"}) //"teams" have a party of pokemans


module.exports = {
    db,
    Pokemon,
    Attack,
    Region,
    Teams
 
}

const Sequelize = require('sequelize')
const db = require('../db')


const Team = db.define('team', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    level: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    monies: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
})

//has pokemans through pokemans

module.exports = Team
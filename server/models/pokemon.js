const Sequelize = require('sequelize')
const db = require('../db')


const Pokemon = db.define("pokemon", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    level: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }

})


module.exports = Pokemon
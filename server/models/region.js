const Sequelize = require("sequelize");
const db = require("../db");


const Region = db.define("region", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
})
// has many pokemans
module.exports = Region
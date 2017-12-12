const Sequelize = require("sequelize");
const db = require("../db");

const Attack = db.define("attack", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        defaultValue: "NORMAL"
    },
    strength: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Attack

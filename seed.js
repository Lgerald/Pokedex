const Sequelize = require('sequelize')
const {db, Pokemon, Region, Teams, Attack} = require('./server/models')
//for now, this is dummy data. plz reseed accurately l8r

db.sync({force: true})
.then(() => {
    return Pokemon.bulkCreate([
      {
        name: "Pikachu",
        type: "ELECTRIC",
        imageUrl:
          "https://www.andrew.cmu.edu/user/adowling/pokemon!/Images/pikachu.jpg"
      },
      {
          name: "Charmander",
          type: "FIRE",
          imageUrl: "http://mipaginapokemon.weebly.com/uploads/2/0/5/0/20504642/9376352.jpg"
      }
    ]);
})
.then(() => {
    return Region.bulkCreate([
      {
        name: "Kanto",
        imageUrl: "http://i70.servimg.com/u/f70/13/40/67/19/kantof10.jpg"
      }
    ]);
})
.then(() => {
    return Teams.bulkCreate([
        {
            name: "Leahs team"
        }
    ])
})
.then(() => {
    return Attack.bulkCreate([
        { name: "bite attack", strength: 5},
        { name: "thunderbolt", strength: 7},
        { name: "ember", strength: 7}
    ])
})
.then(() => {
    db.close()
    console.log("DB successfully Seeded")
})
.catch(err => {
    console.error("SOMETHING WENT HORRIBLY WRONG WITH SEEDING THE DB")
    console.error(err.message)
    console.error(err.stack)
    db.close()
})
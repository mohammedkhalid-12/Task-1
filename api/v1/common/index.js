const db = require('../../../config/db')
const {Sequelize,DataTypes}= require('sequelize');
//connection to db
 const sequelize = new Sequelize(
    db.DB,
    db.USER,
    db.Password,
    {
        host:db.host,
         dialect:   db.dialect

    },
)
 sequelize.authenticate().then(()=>{
    console.log("connected!")
 }).catch(error=>{
console.log("error"+error)
 })

 // sync db scema
 const tables ={}

tables.sequelize=sequelize

tables.USER= require('../User/user_services/user_model')(sequelize,DataTypes)


tables.sequelize.sync({force:false}).then(()=>{
    console.log(' ##########sync db done !########')
 })


 module.exports= tables
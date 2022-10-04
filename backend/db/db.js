const sequelize = require('sequelize')
require('dotenv').config()



module.exports = new sequelize.Sequelize( 
    process.env.DATABASE, 
    process.env.USER, 
    process.env.PASSWORD, 
    {
        host: process.env.HOST,
        dialect : process.env.DIALECT,
    }
);


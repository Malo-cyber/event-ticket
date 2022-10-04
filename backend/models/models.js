const sequelize = require("sequelize"); 
const db = require("../db/db.js")
const {DataTypes} = sequelize

const Concert = db.define('concerts', {
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement : true,
        allowNull : false
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    location : {
        type : DataTypes.STRING,
        allowNull : false
    },
    date : {
        type : DataTypes.DATE,
        allowNull : false
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    imageUrl: {
        type : DataTypes.STRING,
        allowNull : true
    }
    
});

const Ticket = db.define('tickets', {
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement : true,
        allowNull : false
    },
});

const Users = db.define('users', {
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement : true,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : true,
        unique: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    surname : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Users.hasMany(Ticket, { as: "user_id" });
Concert.hasMany(Ticket, { as: "concert_id" });



module.exports = {Concert, Ticket, Users}
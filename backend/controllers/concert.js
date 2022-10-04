
const concertValidation = require('../validation/concert_validation.js')
const {Concert} = require('../models/models.js')
const { QueryTypes } = require('sequelize');
const db = require("../db/db.js")

module.exports = {
    getAll: function(req, res){
        Concert.findAll({
            attributes : {exclude : ["createdAt", "updatedAt"]}
        })
        .then(concerts => {
            res.status(200).json({"events" : concerts})
        })
        .catch(error => res.status(500).json(error))
    },
    getSort: function(req, res){
        const concerts = db.query("SELECT * FROM `concerts` ORDER BY `date` DESC", { 
            type: QueryTypes.SELECT,
            attributes : {exclude : ["createdAt", "updatedAt"]}
         })
        .then(concerts => {
            res.status(200).json({"events" : concerts})
        })
        .catch(error => res.status(500).json(error))
    },
    getOne: function(req, res){
        const {id} = req.params
        Concert.findByPk(id, {
            attributes : {exclude : ["createdAt", "updatedAt"]}
        })
        .then(concert =>{
            if(!concert) return res.status(404).json({"msg" : "Not Found"})
            return res.status(200).json(concert)
        })  
        .catch(error => res.status(500).json(error))
    },
    createOne: function(req, res){
        const {body} = req
        //const {error} = concertValidation(body)
        //if (error) return res.status(401).json(error.details[0].message)
        console.log(body)
        Concert.create({...body})
        .then( () => {
            res.status(201).json({"msg":"Created Ressource"})
        })
        .catch(error => res.status(500).json(error))
    },
    createOneImg: function(req, res){
        
        const concertObject = JSON.parse(req.body.concert);
        delete concertObject._id;
        console.log(concertObject);
        const concert = new Concert({
            ...concertObject,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        });
        concert.save()
        .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
        .catch(error => { res.status(400).json( { error })})
        
        return res.status(200).json({"msg":"Created Ressource"})
    },
    
    deleteOne: function(req, res){
        const {id} = req.params
        Concert.findByPk(id, {
            attributes : {exclude : ["createdAt", "updatedAt"]}
        })
        .then(concert =>{
            if(!concert) return res.status(404).json({"msg" : "Not Found"})
            concert.destroy()
            return res.status(201).json({ message: 'Objet detruit !'})
        })  
    },

    updateOne: function(req, res, next){
        const {id} = req.params
        Concert.findByPk(id, {
            attributes : {exclude : ["createdAt", "updatedAt"]}
        })
        .then(concert =>{
            if(!concert) return res.status(404).json({"msg" : "Not Found"})
            concert.update(req.body)
            return res.status(201).json({ message: 'Objet modifié !', objet : concert})
        })  
        
    }
};


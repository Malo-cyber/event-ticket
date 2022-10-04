const bodyParser = require("body-parser");
const {Ticket, Users, Concert} = require("../models/models.js")

module.exports = {

    createTicket: function(req, res){
        const {body} = req

        //const {error} = ticketValidation(body)
        //if (error) return res.status(401).json(error.details[0].message)
        
        Ticket.create({"concertId" : body.concertId, "userId" : body.userId})
        .then( () => {
            res.status(201).json({"msg":"201"})
        })
    },

    createMultipleTicket: function(req, res){
        const {body} = req

        /*const {error} = ticketValidation(body)*/
        /*if (error) return res.status(401).json(error.details[0].message)*/
        console.log(body)
        Ticket.bulkCreate(body, {individualHooks: true})
        .then((ticket =>{
            return res.status(201).json({"msg": "201"});
        }))
        .catch(error => res.status(500).json({ error }))
    }
    
   
};
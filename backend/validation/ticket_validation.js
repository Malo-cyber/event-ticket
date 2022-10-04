const Joi = require('joi').extend(require('@joi/date'));

const ticketValidation = (body) =>{
    const TicketScema = Joi.object({
        
        location : Joi.string().min(3).trim().required(),
        date : Joi.date().format('YYYY-MM-DD').utc().required()
    })
    return ticketScema.validate(body)

}
module.exports = ticketValidation;

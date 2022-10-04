const Joi = require('joi').extend(require('@joi/date'));

const concertValidation = (body) =>{
    const ConcertScema = Joi.object({
        name : Joi.string().min(3).trim().required(),
        location : Joi.string().min(3).trim().required(),
        date : Joi.date().format('YYYY-MM-DD').utc().required()
    })
    return ConcertScema.validate(body)

}
module.exports = concertValidation;

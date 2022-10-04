const Joi = require('joi').extend(require('@joi/date'));

const userValidation = (body) =>{
    const userScema = Joi.object({
        name : Joi.string().min(3).trim().required(),
        surname : Joi.string().min(2).trim().required(),
        email : Joi.string().email()
    })
    return userScema.validate(body)

}
module.exports = userValidation;

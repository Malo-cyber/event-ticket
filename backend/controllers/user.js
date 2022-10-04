const { Users } = require('../models/models.js')
const jwt = require('jsonwebtoken');
const userValidation = require('../validation/user_validation.js')

exports.signup = (req, res, next) => {
    /*bcrypt.hash(req.body.password, 10)*/
    //validate request whith Joi
    const {error} = userValidation(req.body)
    if (error) return res.status(401).json(error)

    const user = new Users({
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname,
      });
    user.save()
        .then(() => res.status(201).json({ id_user : user.id}))
        .catch(error => res.status(400).json({ error }));
};

exports.multiplesignup = async (req, res, next) => {
    /*bcrypt.hash(req.body.password, 10)*/
    
    Users.bulkCreate(req.body, {individualHooks: true})
    .then((users =>{
        return res.status(201).json({"users": users});
    }))
    .catch(error => res.status(500).json({ error }))
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
       .then(user => {
           if (!user) {
               return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
           }
           bcrypt.compare(req.body.password, user.password)
               .then(valid => {
                   if (!valid) {
                       return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                   }
                   res.status(200).json({
                       userId: user._id,
                       token: jwt.sign(
                        { userId: user._id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' })
                   });
               })
               .catch(error => res.status(500).json({ error }));
       })
       .catch(error => res.status(500).json({ error }));

};
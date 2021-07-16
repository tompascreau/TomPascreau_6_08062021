const passwordSchema = require('../models/password');


// vérifie que le mot de passe valide le schema décrit
module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.writeHead(400, '{"message":"Mot de passe requis : 8 à 100 caractères. Au moins 1 Majuscule, 1 minuscule, 1 chiffre. Sans espaces"}', {
            'content-type': 'application/json'
        });
        res.end('Mot de passe invalide');
    } else {
        next();
    }
};
var passwordValidator = require('password-validator');
 
// On crée un schéma pour le mot de passe
var passwordSchema = new passwordValidator();
 
passwordSchema
.is().min(8)                                    // Au moins 8 caractères
.is().max(100)                                  // Au maximum 100 caractères
.has().uppercase()                              // Doit contenir au moins 1 majuscule
.has().lowercase()                              // Doit contenir au moins une minuscule
.has().digits()                                 // Doit avoir au moins un chiffre
.has().not().spaces()                           // Ne doit pas contenir d'espaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Liste de mots de passe à blackilist

module.exports = passwordSchema;
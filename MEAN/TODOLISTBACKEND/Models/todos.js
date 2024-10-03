const mongoose = require('mongoose');

// Définition du schéma pour les todos
const todosSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Le contenu de la tâche est obligatoire'],
        minlength: [3, 'Le contenu doit comporter au moins 3 caractères'],
        maxlength: [500, 'Le contenu ne peut pas dépasser 500 caractères']
    },
    date: {
        type: Date,
        required: true,
        default: Date.now // Définit la date actuelle par défaut si aucune date n'est fournie
    }
}, { timestamps: true }); // Ajout de timestamps automatiques pour createdAt et updatedAt

module.exports = mongoose.model('Todos', todosSchema);

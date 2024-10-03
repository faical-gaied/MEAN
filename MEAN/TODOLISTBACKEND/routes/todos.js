const express = require('express');
const router = express.Router();
const TodosController = require('../controllers/TodosController');

//CRUD (create, read, update, delete) 
//désigne les quatre opérations de base pour la persistance des données, 
//en particulier le stockage d'informations en base de données.

// CREATE:Ajouter une tâche (POST)
router.post('/ajouter', TodosController.ajouterTodos);

// READ: Liste des tâches (GET)
router.get('/lister', TodosController.listerTodos);

// READ: Liste des tâches (GET)
router.get('/:idtodos/get', TodosController.TodoById);

// UPDATE: Modifier une tâche (PUT ou PATCH)
router.put('/:idtodos/modifier', TodosController.modifierTodos);

// DELETE: Supprimer une tâche (DELETE)
router.delete('/:idtodos/supprimer', TodosController.supprimerTodos);



module.exports = router;

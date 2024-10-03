const TodosModel = require('../Models/todos');

// Fonction pour lister les todos
exports.listerTodos = async (req, res) => {
    try {
        const listTodos = await TodosModel.find(); // Utilisation de await 
        res.status(200).json({ listTodos });
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la récupération des tâches", error });
    }
};

// Fonction pour ajouter un todo
exports.ajouterTodos = async (req, res) => {
    try {
        const todosObj = {
            content: req.body.content,
            date: req.body.date
        };
        console.log(todosObj);

        const newTodo = new TodosModel(todosObj);
        const savedTodo = await newTodo.save();
        res.status(200).json({ message: "Tâche ajoutée avec succès", savedTodo });
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de l'ajout de la tâche", error: err.message });
    }
};

// Fonction pour supprimer un todo
exports.supprimerTodos = async (req, res) => {
    const id = req.params.idtodos;
    try {
        const deletedTodo = await TodosModel.findByIdAndDelete(id);
        if (deletedTodo) {
            res.status(200).json({ message: 'Tâche supprimée avec succès', deletedTodo });
        } else {
            res.status(404).json({ message: 'Tâche non trouvée' });
        }
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de la suppression de la tâche", error: err.message });
    }
};

// Fonction pour modifier un todo
exports.modifierTodos = async (req, res) => {
    const id = req.params.idtodos;
    const ModifiedObj = {
        content: req.body.content,
        date: req.body.date
    };
    try {
        const modifiedTodo = await TodosModel.findByIdAndUpdate(id, ModifiedObj, { new: true });
        if (modifiedTodo) {
            res.status(200).json({ message: 'Tâche modifiée avec succès', modifiedTodo });
        } else {
            res.status(404).json({ message: 'Tâche non trouvée' });
        }
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de la modification de la tâche", error: err.message });
    }
};

exports.TodoById = async (req, res) => {
    const id = req.params.idtodos; // Fetching the id from params
    try {
        const todo = await TodosModel.findById(id); // Using async/await
        if (!todo) {
            return res.status(404).json({ message: 'Tâche non trouvée' }); // Handle case when todo is not found
        }
        return res.status(200).json({ todo }); // Return the single todo item
    } catch (error) {
        return res.status(400).json({ error: "Erreur lors de la récupération de la tâche" }); // Handle errors
    }
};




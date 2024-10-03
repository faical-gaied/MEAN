const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

// Middleware pour parser le JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

const TodosRoutes = require('./routes/todos');

// Utilisation des routes Todos
app.use('/todos', TodosRoutes);

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/meanstackcourse1')
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Connection error: ", err.message));

// Gestion globale des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

// Démarrer le serveur
app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});

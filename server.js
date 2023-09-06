const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000; // Replace with your desired port number

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// Route POST pour ajouter un utilisateur
app.post('/api/users', (req, res) => {
    // Récupérez les données de l'utilisateur à partir du corps de la requête (au format JSON)
    const userData = req.body;
  
    // Utilisez Sequelize pour créer un nouvel utilisateur dans la base de données
    User.create(userData)
      .then((user) => {
        console.log('Utilisateur ajouté avec succès:', user.toJSON());
        res.status(201).json(user); // Répondre avec l'utilisateur ajouté
      })
      .catch((err) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur:', err);
        res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'utilisateur' });
      });
});


// Route GET pour obtenir tous les utilisateurs
app.get('/api/users', (req, res) => {
    // Utilisez Sequelize pour récupérer tous les utilisateurs de la base de données
    User.findAll()
      .then((users) => {
        console.log('Liste des utilisateurs récupérée avec succès.');
        res.status(200).json(users); // Répondre avec la liste des utilisateurs
      })
      .catch((err) => {
        console.error('Erreur lors de la récupération des utilisateurs:', err);
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
      });
});


// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

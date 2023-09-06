// models.js

const Sequelize = require('sequelize');

// Spécifiez l'URL de connexion à votre base de données PostgreSQL
const dbUrl = 'postgres://fabrichdb_user:Tzx3aKIeHQBffGE4dWslWa2WiBzNSEeg@dpg-cjs9k0dm702s73fo20q0-a/fabrichdb';

// Créez une instance Sequelize en utilisant l'URL de connexion
const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
});

// Testez la connexion à la base de données
sequelize
  .authenticate()
  .then(() => {
    console.log('Connexion à la base de données PostgreSQL réussie');
  })
  .catch((err) => {
    console.error('Erreur de connexion à la base de données:', err);
  });

// Définir le modèle pour la table des utilisateurs (username)
const User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, // Assurez-vous que les noms d'utilisateur sont uniques
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, // Assurez-vous que les noms d'utilisateur sont uniques
  }
});

// Synchronisez les modèles avec la base de données
sequelize.sync()
  .then(() => {
    console.log('Les modèles ont été synchronisés avec la base de données.');
  })
  .catch((err) => {
    console.error('Erreur lors de la synchronisation des modèles:', err);
  });

module.exports = {
  User
};

# NABU - Numérisation Archivage Bibliothèque Universitaire
Application de gestion de paquets d'archivage pour la production numérique du SCDI et envoi de ces paquets à la plateforme d'archivage du CINES (VITAM)
 - Gestion des paquets (ajout, modification, suppression) et des statuts du paquet (envoi ok, en erreur...)
 - Tris par attributs, filtres par statuts...
 - Historisation des envois
 - Accès multi-utilisateurs avec rôle
 - import en masse d'une liste de paquets (via un CSV)

# Frontend Nabu

- Interface utilisateur de NABU en écrite en html, css, Javascript
- Utilise le *Backend Nabu* dans ce même dépot pour les accès à la base de données et les envois de paquets

## Technologies
- html
- css 
- javacript (avec jquery, bootstrap, select2 et datatables.js)

##  Installation
- Cloner le repo sur un serveur web
- Modifier [/src/APIA/config/config.js](config.js) pour spécifier le nom de l'application, logo, l'url... dans l'interface
- Le documentroot du serveur web doit être le dossier du frontend_nabu et il faut créer un alias sur le dossier backend_nabu

# Backend Nabu

API REST en PHP pour la gestion de paquets d'archivage et les envois.

## Description

Backend Nabu est une API PHP qui permet de gérer des utilisateurs, des paquets d'archivage et un historique des envois.

## Technologies

- PHP 8.0+
- MySQL/MariaDB
- JWT (firebase/php-jwt) pour l'authentification
- phpdotenv pour la configuration

## Prérequis

- Serveur web (testé sur apache2)
- PHP 8.0 ou supérieur
- MySQL/MariaDB
- Composer
- un accès à l'API VITAM SCDI TO CINES

###  Installation
- Installer les dépendances du backend avec composer (composer.json)
- Créer un fichier .env à la racine pour les accès à la base de données et tokens JWT

##  Structure du backend

```
backend_nabu/
├── Config/              # Configuration (base de données)
├── Controller/          # Contrôleurs (logique métier)
│   ├── Auth/           # Authentification (login, register)
│   └── PaquetController/ # Gestion des paquets
├── DAO/                # Data Access Objects (accès aux données)
├── Model/              # Modèles de données
├── MiddleWare/         # Middleware d'authentification
└── vendor/             # Dépendances Composer
```

##  Endpoints API

### Authentification

- `POST /?action=register` - Inscription d'un nouvel utilisateur
- `POST /?action=login` - Connexion utilisateur
- `GET /?action=logout` - Déconnexion utilisateur

### Utilisateurs

- `GET /?page=user&action=getAll` - Liste tous les utilisateurs
- `GET /?page=user&action=getById` - Récupérer un utilisateur par ID

### Paquets

- `GET /?page=paquet&action=getAll` - Liste tous les paquets
- `GET /?page=paquet&action=getById` - Récupérer un paquet par ID
- `POST /?page=paquet&action=create` - Créer un nouveau paquet
- `PUT /?page=paquet&action=update` - Modifier un paquet
- `DELETE /?page=paquet&action=delete` - Supprimer un paquet

### Historique d'envoi

- `GET /?page=historique&action=getAll` - Liste l'historique des envois
- `GET /?page=historique&action=getById` - Récupérer un historique par ID

### Corpus

- `GET /?page=corpus&action=getAll` - Liste tous les corpus
- `GET /?page=corpus&action=getById` - Récupérer un corpus par ID

##  Authentification

L'API utilise JWT (JSON Web Tokens) pour l'authentification. Après connexion, un token est généré.

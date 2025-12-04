CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insertion de 3 utilisateurs avec mots de passe hachés
INSERT INTO users (nom, email, password) VALUES ('Alice Dupont', 'alice@example.com', '123456');
INSERT INTO users (nom, email, password) VALUES ('Brenda Mvuemba', 'brenda@example.com', '124');
INSERT INTO users (nom, email, password) VALUES ('Jean Kabasele', 'jean@example.com', '23456');

CREATE TABLE IF NOT EXISTS produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    categorie VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO produits (nom, email, password) VALUES ('Alice Dupont', 'alice@example.com', '123456');
INSERT INTO produits (nom, email, password) VALUES ('Brenda Mvuemba', 'brenda@example.com', '124');
INSERT INTO produits (nom, email, password) VALUES ('Jean Kabasele', 'jean@example.com', '23456');
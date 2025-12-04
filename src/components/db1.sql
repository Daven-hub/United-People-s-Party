-- Table des catégories
CREATE TABLE categorie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL
);

-- Table des produits
CREATE TABLE produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prix DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES categorie(id)
);

CREATE TABLE commande (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    produit_id INT,
    quantite INT NOT NULL,
    date_commande DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (produit_id) REFERENCES produits(id)
);


-- Catégories
INSERT INTO categories (nom) VALUES 
('Électronique'), 
('Papeterie'), 
('Vêtements');

-- Produits
INSERT INTO produits (nom, prix, stock, categorie_id) VALUES 
('Clavier', 29.99, 50, 1),
('Stylo', 1.20, 300, 2),
('T-shirt', 15.00, 100, 3),
('Souris', 19.99, 75, 1);

-- Commandes (user_id, produit_id, quantité)
INSERT INTO commande (user_id, produit_id, quantite) VALUES 
(1, 1, 2), 
(2, 2, 10),
(1, 3, 1); 
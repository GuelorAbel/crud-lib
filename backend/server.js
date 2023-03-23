// les modules
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

// initialisation de mon app
const app = express();
// connexion à la base de données
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "librairie"
})

// les middlewares(express et cors)
// il retour les données au format json vers le client
app.use(express.json());
// il permette d'insérer les données du client vers le backend(la base de données) 
app.use(cors());

// la route qui permet d'obtenir les données  la page d'accueil 
app.get("/", (req, res) => {
    // la requête sql
    const sql = "SELECT * FROM livres ORDER BY id DESC LIMIT 4";
    db.query(sql, (err, data) =>{
        // en cas d'erreur affiche l'erreur / sinon, affiche les données
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
})

// la route qui obtentient les données pour la page boutique
app.get("/boutique", (req, res) => {
    // la requête sql
    const sql = "SELECT * FROM livres";
    db.query(sql, (err, data) =>{
        // en cas d'erreur affiche l'erreur / sinon, affiche les données
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
})

// la route qui permet d'inserer les données dans la bd via un formulaire
app.post("/ajoutLivre", (req, res) => {
   // la requête sql
   const sql = "INSERT INTO livres (`title`, `resume`, `price`,`cover`) VALUES (?)";
   const values = [
    req.body.title,
    req.body.resume,
    req.body.price,
    req.body.cover,
   ]
   db.query(sql, [values], (err, data) => {
        // en cas d'erreur affiche l'erreur / sinon, affiche les données
        if(err) return res.json(err);
        return res.status(200).json("Les données ont été ajoutées avec succès");
   })
})

// Lancement du serveur au 8800
app.listen(8800, () => {
    console.log("La connexion au serveur est établie au 8800");
})
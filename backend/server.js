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

// les middlewares (ils permettent d'insérer les données du client dans la base de données)
app.use(express.json());
app.use(cors());

// obtenir les données  la page d'accueil 
app.get("/", (req, res) => {
    // la requête sql
    const sql = "SELECT * FROM livres ORDER BY id DESC LIMIT 4";
    db.query(sql, (err, data) =>{
        // en cas d'erreur affiche l'erreur / sinon, affiche les données
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
})

// obtention des données sur la page boutique
app.get("/boutique", (req, res) => {
    // la requête sql
    const sql = "SELECT * FROM livres";
    db.query(sql, (err, data) =>{
        // en cas d'erreur affiche l'erreur / sinon, affiche les données
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
})

// insertion des données dans la bd
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
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
    database: "librairie",
    port: 3306
})

// les middlewares(express et cors)
// il retour les données au format json vers le client
app.use(express.json());
// il permette d'insérer les données du client vers le backend(la base de données) 
app.use(cors());

// la route qui permet d'obtenir les 4 derniers livres(Page d'accueil) 
app.get("/", (req, res) => {
    // la requête sql
    const sql = "SELECT * FROM livres ORDER BY id DESC LIMIT 4";
    db.query(sql, (err, data) =>{
        // en cas d'erreur affiche l'erreur / sinon, affiche les données
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
})

// la route qui affiche tout les livres(page boutique)
app.get("/boutique", (req, res) => {
    // la requête sql
    const sql = "SELECT * FROM livres";
    db.query(sql, (err, data) =>{
        // en cas d'erreur affiche l'erreur / sinon, affiche les données
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
})

app.get("/livre", (req, res) => {
    // la requête sql
    const sql = "SELECT `id`, `title` FROM livres";
    db.query(sql, (err, data) =>{
        // en cas d'erreur affiche l'erreur / sinon, affiche les données
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
})


// la route qui permet d'inserer un nouveau livre(pade d'ajout) dans la BD
app.post("/creer", (req, res) => {
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
        return res.status(200).json("Le livre a été ajouté avec succès!");
   })
})

// la route qui permet de modifier un livre  partir de son ID
// app.put("/livre/:id", (res, req) => {
//     const bookId = req.params.id;
//     // la requête sql
//     const sql = "UPDATE livres SET `title` = ?, `resume` = ?, `price` = ?, `cover` = ? WHERE id = ?";
//     const values = [
//         req.body.title,
//         req.body.resume,
//         req.body.price,
//         req.body.cover,
//        ]
//     db.query(sql, [...values, bookId], (err, data) => {
//         // en cas d'erreur affiche l'erreur / sinon, affiche les données
//         if(err) return res.json(err);
//         return res.status(200).json("Le livre a été mis à jour avec succès!");
//     })
// })

// // la route qui permet de supprimer définitivement un livre
app.delete("/livre/:id", (res, req) => {
    const bookId = req.params.id;
    // la requête sql
    const sql = "DELETE FROM livres WHERE id = ?";
    db.query(sql, [bookId], (err, data) => {
        // en cas d'erreur affiche l'erreur / sinon, affiche les données
        if(err) return res.json(err);
        return res.status(200).json("Le livre a été supprimé avec succès!");
    })
})

// Lancement du serveur au 8800
app.listen(5000, () => {
    console.log("La connexion au serveur est établie au 5000");
})
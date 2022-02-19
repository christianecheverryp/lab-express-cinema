const express = require('express');
const router = express.Router();

// 1. Requirimos primero el modelo para poder empezar a trabajar con el.
const Movie = require("../models/Movie.model") 

//  Empezamos a crear las rutas parar visualizar toda la info que viene de la BBDD

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});

// 2. Buscamos en la BD los documentos de la colección de Movies
router.get("/movies", (req, res, next) => {
    Movie.find()
    .then((response) => {
        console.log(response)
        res.render("movies.hbs", {response})
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get("/movies/:id", (req, res, next) => {
    console.log(req.params.id)
    Movie.findById(req.params.id)
    .then((response) => {
        res.render("movie-details.hbs", {response})
    })
    .catch((err) => {
        console.log(err)
    })
})


module.exports = router;




// 
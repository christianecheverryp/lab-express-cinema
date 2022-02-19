

const mongoose = require("mongoose"); // 1. Lo utilizamos para crear nuestros Schema y modelos


// 2. Creamos el Schema (formato de cada documento de nuestra BBDD)
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    director: {
        type: String,
    },
    stars: {
        type: [String],
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    showtimes: {
        type: [String],
    }
})

// 3. Creamos el modelo, lo que nos va permiir acceder a los elementos (buscarlos, mostrarlos, etc)
const Movie = mongoose.model("Movie", movieSchema)

// 4. Exportamos el modelo para poderlo usar en otro lado ( movies.seed.js)
module.exports = Movie
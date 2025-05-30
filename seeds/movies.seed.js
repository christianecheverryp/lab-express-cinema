// Esto es un archivo de js que nos va permitir agregar info a nuestra BBDD

// 1. Creamos el array para utilizarlo desde el modelo
const movies = [
    {
      title: "A Wrinkle in Time",
      director: "Ava DuVernay",
      stars: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      description:
        "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
    },
    {
      title: "The Strangers: Prey at Night",
      director: "Johannes Roberts",
      stars: ["Christina Hendricks", "Bailee Madison", "Martin Henderson"],
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      description:
        "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
      showtimes: ["13:50", "16:20", "19:20", "22:10"]
    },
    {
      title: "The Hurricane Heist",
      director: "Rob Cohen",
      stars: ["Toby Kebbell", "Maggie Grace", "Ryan Kwanten"],
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      description:
        "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
      showtimes: ["13:10", "15:40", "18:20", "20:50", "23:10"]
    },
    {
      title: "Gringo",
      director: "Nash Edgerton",
      stars: ["Joel Edgerton", "Charlize Theron", "David Oyelowo"],
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      description:
        "GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.",
      showtimes: ["13:40", "15:50", "19:00", "21:20", "23:50"]
    },
    {
      title: "Thoroughbreds",
      director: "Cory Finley",
      stars: ["Anya Taylor-Joy", "Olivia Cooke", "Anton Yelchin"],
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      description:
        "Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.",
      showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
    },
    {
      title: "The Leisure Seeker",
      director: "Paolo Virzì",
      stars: ["Helen Mirren", "Donald Sutherland", "Janel Moloney"],
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      description:
        "A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.",
      showtimes: ["13:40", "15:50", "19:00", "21:20", "23:50"]
    },
    {
      title: "Black Panther",
      director: "Ryan Coogler",
      stars: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      description:
        "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
      showtimes: ["13:50", "16:20", "19:20", "22:10"]
    },
    {
      title: "Red Sparrow",
      director: "Francis Lawrence",
      stars: ["Jennifer Lawrence", "Joel Edgerton", "Matthias Schoenaerts"],
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg",
      description:
        "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
      showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
    }
  ];
  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
  

  // 2. Accedemos al modelo (Movie.model.js)
  const Movie = require("../models/Movie.model")

  //  Insertamos la toda la info del array en la BBDD

  // 3. Utilizamos el paquete de mongoos para hacer la conexion a la BBDD y poder agregar la info del array a la BBDD
  const mongoose = require("mongoose")

  // 4. Hacemos la conexion al mismo lugar donde vamos a insertar el array
  // 5. Tambien hacemos la promesa 
  mongoose.connect("mongodb://localhost/lab-express-cinema")
  .then((response)=> {
    console.log("conectados a la BD")
    return Movie.insertMany(movies) // Insertamos los documentos
  })
  .then((response) => {
    console.log("Movies agregadas correctamente")
    mongoose.connection.close() // Cerramos la conexion
  })
  .catch((err) => {
    console.log(err)
  })


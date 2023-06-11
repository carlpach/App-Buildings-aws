const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//const Libro = require('../api/models/libro.model');

const arrayOwners = [
    {
        "titulo": "harrypotter1",
        "tipo": "Novela",
        "genero" : "Aventuras",
        "portada": ""
    },
    {
        "titulo": "100anos",
        "tipo": "Ensayo",
        "genero" : "Terror",
        "portada": ""
    }
]

mongoose.connect(process.env.DB_URL)
.then( async () => {
  const allOwners = await Libro.find();
  if (allOwners.length > 0) {
      await Libro.collection.drop();
      console.log('Owners deleted');
  }
})
.catch((error) => console.log("error deleting owners", error))
.then( async () => {
    // populate db with the seed
    const ownerMap = arrayOwners.map((propert) => new Libro(propert));
    await Libro.insertMany(ownerMap);
    console.log("Owners inserted");
})
.catch((error) => console.log("error inserting libros", error))
.finally(() => mongoose.disconnect());
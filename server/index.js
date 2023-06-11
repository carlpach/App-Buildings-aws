const express = require("express");
const cloudinary = require("cloudinary").v2;
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

PORT = process.env.PORT;

const propertiesRoutes = require("./src/api/routes/property.routes")
const ownersRoutes = require("./src/api/routes/owner.routes")

const {connect} = require('./src/utils/db');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
  });

const app = express();
connect();

//VAMOS A PONER DE RESPUESTA
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, PATCH'); //Decimos que metodos tenemos permitidos
  res.header('Access-Control-Allow-Credentials', 'true'); //permitimos la conexión con credenciales(Bearer token)
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // permitimos los headers del tipo Content-Type
  next();
})

// Configuracion de CORS
//CORS --> CORS ORIGIN RESOURCE SHARING --> Intercambio de recursos cruzados -> manera de permir el compartir recursos enntre distintos origenes
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:4200", "http://127.0.0.1:5500"],
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/properties", propertiesRoutes);
app.use("/owners", ownersRoutes);

app.listen(PORT,  () => console.log('listening on port', PORT));

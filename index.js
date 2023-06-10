const express = require("express");
const cloudinary = require("cloudinary").v2;
const dotenv = require('dotenv');
dotenv.config();

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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/properties", propertiesRoutes);
app.use("/owners", ownersRoutes);

app.listen(PORT,  () => console.log('listening on port', PORT));

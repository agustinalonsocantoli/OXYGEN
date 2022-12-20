'use strict'

let mongoose = require('mongoose');
require('dotenv').config();

let app = require('./app');
let port = 9000;

mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Conexion establecida");

            app.listen(port, () => { console.log("Run Server"); });
        })
        .catch((err) => {
            console.log(err);
        });
require("@babel/polyfill");

import express from "express";
import mongoose from "mongoose";
import bluebird from "bluebird";
import bodyParser from "body-parser";
import { connect } from "../data/db";
import session from "express-session";
import connectMongo from "connect-mongo";

const app = express();
const MongoStore = connectMongo(session);

const port = 3004;

mongoose.Promise = bluebird;
connect({ promiseLibrary: bluebird, useNewUrlParser: true })
    .then(() => console.log("Database connection successful"))
    .catch(err => console.log(err));
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: "false"}));
app.use(
    session({
        secret: ",?DT|f@uMG@OM$f9rm1n#>{|Y-'m_feToXSIq.jLAb_#3cnr_0iJfx^J`ItL4E/",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
            url: "mongodb://localhost/recipe-app"
        })
    })
    );
    
require("./controllers")(app);
app.listen(port, () => {
    console.log("API is listening on port " + port);
});

module.exports = app;
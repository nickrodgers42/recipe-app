require("@babel/polyfill");
import express from "express";
import mongoose from "mongoose";
import bluebird from "bluebird";
import bodyParser from "body-parser";

const app = express();

const port = 3004;

app.listen(port, () => {
    console.log("Server is running on port " + port);
})
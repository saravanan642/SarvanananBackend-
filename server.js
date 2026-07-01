require("dotenv").config({quiet:true});

const express = require("express");
const Database = require("./config/db");
const listen = require("./config/listen");
const IndexRouter = require("./routes/index")
const app = express();
app.use(express.json());

Database();
listen(app);
app.use(IndexRouter)

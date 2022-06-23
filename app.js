// Require Packages
const express = require("express");
const app = express();

// Express Middleware
app.set("view engine","ejs");
app.use(express.static(__dirname  + "/public/"));
app.use(express.urlencoded({extended: true}));







module.exports = app;   
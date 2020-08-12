const {index}= require('./pages')

const express = require("express");
const app = express();
const nunjucks = require('nunjucks');


nunjucks.configure('src/principal', {
    express: app,
    noCahe:true,
})

app
.use(express.static("public"))
.get("/", index)
.listen("5500");
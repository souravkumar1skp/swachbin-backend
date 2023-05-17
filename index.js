const connectToMongo = require('./db');
const express = require('express');
// const bodyparser= require("body-parser");

const app = express()
const port = 5000

app.use(express.json());
// app.use(bodyparser.urlencoded({extended: true}));

app.use('/',require('./routes/Locate'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

connectToMongo();
const express = require('express')
const router = require('./network/routes')
const db = require("./db");
require("dotenv").config({ path: ".env" });

db(process.env.DB_CONNECT);

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
router(app)

app.use('/app', express.static('public'))

app.listen(process.env.PORT, () => {
  console.log(`La app esta escuchando en el puerto ${process.env.PORT}`)
})
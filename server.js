const express = require('express')
const app = express()
const server = require('http').Server(app)

const cors = require('cors')
const socket = require('./socket')
const db = require("./db");
const router = require('./network/routes')
require("dotenv").config({ path: ".env" });

db(process.env.DB_CONNECT);

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

socket.connect(server)

router(app)

app.use('/app', express.static('public'))

server.listen(process.env.PORT, () => {
  console.log(`La app esta escuchando en el puerto ${process.env.PORT}`)
})
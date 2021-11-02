const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const response = require('./network/response')

const app = express()

app.use(bodyParser.json())
app.use(router)

router.get('/messages', (req, res) => {
  console.log(req.headers)
  res.header({
    "custom-header": "Nuestro valor personalizado"
  })
  response.success(req, res, "Lista de mensajes")
})

router.post('/messages', (req, res) => {
  console.log(req.body)
  if (req.query.error === 'ok') {
    response.error(req, res, "Error inesperado", 500, 'Es solo una simulación de los errores')
  } else {
    response.success(req, res, "Mensaje agregado", 201)
  }
})

router.delete('/messages', (req, res) => {
  response.success(req, res, "Mensaje eliminado")
})

app.use('/app', express.static('public'))

app.listen(3000)
console.log('La app esta escuchando en el puerto 3000')
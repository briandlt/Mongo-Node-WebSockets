const express = require('express')
const router = express.Router()
const response = require('../../network/response')

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

module.exports = router;
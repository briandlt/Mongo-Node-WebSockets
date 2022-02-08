const express = require('express')
const multer = require('multer')
const response = require('../../network/response')
const { getMessages, addMessage, updateMessage, deleteMessage} = require('./controller')
const router = express.Router()

const upload = multer({
  dest: 'public/files/'
})

router.get('/', (req, res) => {
  const filterMessages = req.query.user || null
  getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500, e)
    })
})

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file)
  addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201)
    })
    .catch((e) => {
      response.error(req, res, "Información faltante", 400, e)
    })
})

router.patch('/:id', (req, res) => {
  updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch (e => {
      response.error(req, res, `Error interno`, 500, e)  
    })
})

router.delete('/:id', (req, res) => {
  deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} eliminado!`, 200)
    })
    .catch (e => {
      response.error(req, res, `Error interno`, 500, e)  
    })
})

module.exports = router;
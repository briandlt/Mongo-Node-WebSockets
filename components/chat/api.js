const express = require('express')
const response = require('../../network/response')
const { addChat, listChat } = require('./controller')
const router = express.Router()


router.post('/', (req, res) => {
  addChat(req.body.users)
    .then(data => {
      response.success(req, res, data, 201)
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err)
    })
})

router.get('/:userId', (req, res) => {
  listChat(req.params.userId)
    .then((users) => {
      response.success(req, res, users, 200)
    })
    .catch(err => {
      response.error(req, res, "Internal error", 500, err)
    })
})

module.exports = router;
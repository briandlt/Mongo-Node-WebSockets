const express = require('express')
const response = require('../../network/response')
const { addUser, getUsers, updateUser, deleteUser } = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
  const filterUsers = req.query.username || null
  getUsers(filterUsers)
    .then((usersList) => {
      response.success(req, res, usersList, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500, e)
    })
  
})

router.post('/', (req, res) => {
  addUser(req.body.name)
    .then((user) => {
      response.success(req, res, user, 201)
    })
    .catch(() => {
      response.error(req, res, "Información faltante", 400, 'Error en el controller')
    })
})

router.patch('/:username', (req, res) => {
  updateUser(req.params.username, req.body.name)
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch(e => {
      response.error(req, res, `Error interno`, 500, e)
    })
})

router.delete('/:id', (req, res) => {
  deleteUser(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} eliminado!`, 200)
    })
    .catch(e => {
      response.error(req, res, `Error interno`, 500, e)
    })
})

module.exports = router;
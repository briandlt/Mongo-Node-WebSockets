// const express = require('express')
const message = require('../components/message/api')
const user = require('../components/user/api')
const chat = require('../components/chat/api')

const routes = (server) => {
  server.use('/message', message)
  server.use('/user', user)
  server.use('/chat', chat)
}

module.exports = routes
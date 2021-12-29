// const express = require('express')
const message = require('../components/message/api')

const routes = (server) => {
  server.use('/messages', message)
}

module.exports = routes
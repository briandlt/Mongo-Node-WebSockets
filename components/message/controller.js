const service = require('./service')

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      return reject('Información faltante!')
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    }
    service.add(fullMessage)
    resolve(fullMessage)
  })
}

const getMessages = (filterUser) => {
  return new Promise(async (resolve, reject) => {
    resolve(await service.list(filterUser))
  })
}

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Ivalid data')
    }
    const result = await service.updateText(id, message)
    resolve(result)
  })
}

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id invalido!')
    }
    service.remove(id)
      .then(() => {
        resolve()
      })
      .catch(e => {
        reject(e)
      })
  })
}


module.exports = ({ addMessage, deleteMessage, getMessages, updateMessage })
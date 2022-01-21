const service = require('./service')

const addMessage = (chat, user, message, file) => {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      reject('Información faltante!')
    }

    let fileUrl = ''
    if (file) {
      fileUrl = `http://localhost:3000/app/files/${file.filename}`
    }

    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl
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
    const result = await service.update(id, message)
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
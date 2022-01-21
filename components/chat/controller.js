const service = require('./service')

const addChat = (users) => {
  return new Promise((resolve, reject) => {
    if (!users || !Array.isArray(users)) {
      reject("Invalid user list")
    }
    const chat = {
      users
    }
    resolve(service.add(chat))
  })
}

const listChat = (userId) => {
  return new Promise(async (resolve, reject) => {
    resolve(await service.list(userId))
  })
}

module.exports = {
  addChat,
  listChat
}

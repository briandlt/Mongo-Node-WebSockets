const service = require('./service')

const addUser = (name) => {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject("Información faltante")
    }
    const user = {
      name
    }
    service.add(user)
    resolve(user)
  })
}

const getUsers = (filterUser) => {
  return new Promise(async (resolve, reject) => {
    resolve(await service.list(filterUser))
  })
}

const updateUser = (id, name) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !name) {
      reject('Ivalid data')
    }
    const result = await service.update(id, name)
    resolve(result)
  })
}

const deleteUser = (id) => {
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

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser
}

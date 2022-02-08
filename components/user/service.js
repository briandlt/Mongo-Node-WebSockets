const Model = require('./model')

const addUser = (user) => {
  const myUser = new Model(user)
  return myUser.save()
}

const getUsers = async (filterName) => {
  let filter = {}
  if (filterName) filter = { name: filterName }
  const users = await Model.find(filter)
  return users
}

const updateUser = async (id, name) => {
  const foundUser = await Model.findOne({
    name: id
  })
  foundUser.name = name
  const newUser = await foundUser.save()
  return newUser
}

const removeUser = async (id) => {
  return await Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addUser,
  list: getUsers,
  update: updateUser,
  remove: removeUser,
}
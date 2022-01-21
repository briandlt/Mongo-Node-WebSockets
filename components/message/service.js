const Model = require('./model')

const addMessage = (message) => {
  const myMessage = new Model(message)
  myMessage.save()
}

const getMessage = async (filterUser) => {

  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterUser) filter = { user: filterUser }
    const messages = Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if(error) reject(error)
        resolve(populated)
      })
  })
}

const updateText = async (id, message) => {
  const foundMessage = await Model.findOne({
    _id: id
  })

  foundMessage.message = message;
  const newMessage = await foundMessage.save()
  return newMessage
}

const removeMessage = async (id) => {
  return await Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addMessage,
  list: getMessage,
  update: updateText,
  remove: removeMessage
}
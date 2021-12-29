const Model = require('./model')

function addMessage(message) {
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessage(filterUser) {
  let filter = {}
  if (filterUser) {
    filter = { user: filterUser}
  }
  const messages = await Model.find(filter)
  return messages
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  })

  foundMessage.message = message;
  const newMessage = await foundMessage.save()
  return newMessage
}

async function removeMessage(id) {
  console.log('esta es la id', id)
  return await Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage
  // get
  // update
}
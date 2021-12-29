const db = require('mongoose')

db.Promise = global.Promise

const connect = async (url) => {
  await db.connect(url, {
    useNewUrlParser: true
  })
  console.log('[db] conectada con exito')
}

module.exports = connect

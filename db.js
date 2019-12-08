var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')
// Cấu hình lowdb
const adapter = new FileSync('db.json')
const db = low(adapter)
// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write()

  module.exports = db;
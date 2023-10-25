const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  
  capacity: { type: String, required: true },
  number: { type: String, required: true },
  status: { type: String, required: true },
  
})

const Table = mongoose.model("table",tableSchema);

module.exports = Table;
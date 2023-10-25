const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const paymetSchema = new Schema({

        name: {
   
            type: String ,
            required: true,
        },
       
        type: {
        type: String,
        required: true,
    
       },
       description: {
        type: String,
        required: true,
       }
      


})

const Paymet = mongoose.model("paymet",paymetSchema);

module.exports = Paymet;
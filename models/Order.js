const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

        OrderId: {
   
            type: String,
            required: true
        },
       description: {

        type: String,
        required: true

       },
       CustomerName: {
        type: String,
        required: true
       },
       item: {
        type: [String],
        required: true
      },
       TotalAmount: {
        type:Number,
        required: true
       },
       payment: {
        type: String,
        required: true
       }


})

const Order = mongoose.model("order",orderSchema);

module.exports = Order;
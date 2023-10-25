const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const menuitemSchema = new Schema({

        name: {
   
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true, // This field is required
          },
          price: {
            type: Number,
            required: true, // This field is required
          },
     

})

const MenuItem = mongoose.model("Menuitem",menuitemSchema);

module.exports = MenuItem;
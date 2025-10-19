const mongoose = require ('mongoose');


const menuitemSchema = new Schema({

        name: {
   
            type: String,
            required: true,
        },
      

})

const MenuItem = mongoose.model("Menuitem",menuitemSchema);

module.exports = MenuItem;


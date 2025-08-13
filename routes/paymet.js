const router = require("express").Router();
let Paymet = require("../models/Paymet"); 


// creat a new menu



  


//http//localhost:8070/menuitem/delete/45dfldfldfg45fg
// Delete a menu item by ID


// Get a specific menu item by ID
router.route("/get/:id").get(async (req, res) =>{
    let payId = req.params.id;
    const pay = await Paymet.findById(payId)
    .then((paymet) => {
        res.status(200).send({status: "User fetched",paymet})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "error with", error: err.message})
    })
})



module.exports = router;



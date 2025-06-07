const router = require("express").Router();






  
// Update a menu item by ID ans use same another methord(D strakcher use)
 //asinkawait function use

})



// Get a specific menu item by ID
router.route("/get/:id").get(async (req, res) =>{
    let orderId = req.params.id;
    const order = await Order.findById(orderId)
    .then((order) => {
        res.status(200).send({status: "User fetched",order})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "error with", error: err.message})
    })
})



module.exports = router;

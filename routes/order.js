const router = require("express").Router();






  
// Update a menu item by ID ans use same another methord(D strakcher use)
 //asinkawait function use

})

//http//localhost:8070/menuitem/delete/45dfldfldfg45fg
// Delete a menu item by ID
router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Order.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
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

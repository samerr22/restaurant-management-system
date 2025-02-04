const router = require("express").Router();



// creat a new menu
router.route("/Oadd").post((req,res)=>{

    const OrderId = req.body.OrderId;
    const description = req.body.description;
    const CustomerName = req.body.CustomerName;
    const item = req.body.item;
    const TotalAmount = req.body.TotalAmount;
    const payment = req.body.payment;

    const newOrder = new Order({
        OrderId,
        description,
        CustomerName,
        item,
        TotalAmount,
        payment,
    })

    newOrder.save().then(()=>{
        res.json("Order added")

    }).catch((err)=>{
        console.log(err);
    })

})

//get all menu
 router.route("/").get((req,res)=>{

    Order.find().then((order)=>{
        res.json(order)
    }).catch((err)=>{
       console.log(err) 
    })
 })

  
// Update a menu item by ID ans use same another methord(D strakcher use)
 //asinkawait function use
router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {OrderId,
        description,
        CustomerName,
        item,
        TotalAmount,
        payment} = req.body;

    const updateOrder = {
        OrderId,
        description,
        CustomerName,
        item,
        TotalAmount,
        payment
    }

    const update = await Order.findByIdAndUpdate(userId, updateOrder)
    .then(()=>{
        res.status(200).send({satatus: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({satatus: "Error with updating data"});
    })

    
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

const router = require("express").Router();
let Paymet = require("../models/Paymet"); 


// creat a new menu
router.route("/Padd").post((req,res)=>{

    const name = req.body.name;
    const type = req.body.type;
    const description = req.body.description;
    

    const newPaymet = new Paymet({
        name,
        type,
        description,
        
    })

    newPaymet.save().then(()=>{
        res.json("Paymet added")

    }).catch((err)=>{
        console.log(err);
    })

})

//get all menu
 router.route("/").get((req,res)=>{

    Paymet.find().then((paymet)=>{
        res.json(paymet)
    }).catch((err)=>{
       console.log(err) 
    })
 })

  
// Update a menu item by ID ans use same another methord(D strakcher use)
 //asinkawait function use
router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {name,
        type,
        description,} = req.body;

    const updatePaymet = {
        name,
        type,
        description,
    }

    const update = await Paymet.findByIdAndUpdate(userId, updatePaymet)
    .then(()=>{
        res.status(200).send({satatus: "Paymet updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({satatus: "Error with updating data"});
    })

    
})

//http//localhost:8070/menuitem/delete/45dfldfldfg45fg
// Delete a menu item by ID
router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Paymet.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Paymet deleted"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

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
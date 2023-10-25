const router = require("express").Router();
let Table = require("../models/Table"); 


// creat a new menu
router.route("/TTadd").post((req,res)=>{

    const capacity = req.body.capacity;
    const number = req.body.number;
    const status = req.body.status;
   

    

    const newTable = new Table({
      
        capacity,
        number,
        status,
        
    })

    newTable.save().then(()=>{
        res.json("Table added")

    }).catch((err)=>{
        console.log(err);
    })

})

//get all menu
 router.route("/").get((req,res)=>{

    Table.find().then((table)=>{
        res.json(table)
    }).catch((err)=>{
       console.log(err) 
    })
 })

  
// Update a menu item by ID ans use same another methord(D strakcher use)
 //asinkawait function use
router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {capacity,
        number,
        status,} = req.body;

    const updateTable = {
        capacity,
        number,
        status,
    }

    const update = await Table.findByIdAndUpdate(userId, updateTable)
    .then(()=>{
        res.status(200).send({satatus: "Table updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({satatus: "Error with updating data"});
    })

    
})

//http//localhost:8070/menuitem/delete/45dfldfldfg45fg
// Delete a menu item by ID
router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Table.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Table deleted"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

// Get a specific menu item by ID
router.route("/get/:id").get(async (req, res) =>{
    let talId = req.params.id;
    const tal = await Table.findById(talId)
    .then((table) => {
        res.status(200).send({status: "User fetched",table})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "error with", error: err.message})
    })
})



module.exports = router;
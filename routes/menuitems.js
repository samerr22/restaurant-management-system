const router = require("express").Router();
let MenuItem = require("../models/MenuItem"); 


// creat a new menu
router.route("/Madd").post((req,res)=>{

    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    

    const newMenuItem = new MenuItem({
        name,
        description,
        price,
        
    })

    newMenuItem.save().then(()=>{
        res.json("MenuItem added")

    }).catch((err)=>{
        console.log(err);
    })

})

//get all menu
 router.route("/").get((req,res)=>{

    MenuItem.find().then((menuitems)=>{
        res.json(menuitems)
    }).catch((err)=>{
       console.log(err) 
    })
 })

  
// Update a menu item by ID ans use same another methord(D strakcher use)
 //asinkawait function use
router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {name,
        description,
        price,
         } = req.body;

    const updateMenuItem = {
        name,
        description,
        price,
        
    }

    const update = await MenuItem.findByIdAndUpdate(userId, updateMenuItem)
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

    await MenuItem.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

// Get a specific menu item by ID
router.route("/get/:id").get(async (req, res) =>{
    let MenuId = req.params.id;
    const Menu = await MenuItem.findById(MenuId)
    .then((menuitem) => {
        res.status(200).send({status: "User fetched",menuitem})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "error with", error: err.message})
    })
})


module.exports = router;
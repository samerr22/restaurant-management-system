const router = require("express").Router();








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

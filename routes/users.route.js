const router =require("express").Router();
const { getAllUser, createUser, getOneUser, deleteUser, updateUser } = require("../controllers/users.controller");




router.get("/",getAllUser);
router.get("/:id",getOneUser);
router.post("/",createUser);
router.patch("/:id",updateUser);
router.delete("/:id",deleteUser);



module.exports=router;
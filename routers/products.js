const express=require("express");
const router=express.Router();
const {allproducts}=require("../controllers/products");
router.get("/",allproducts);
module.exports=router;
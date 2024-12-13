const express=require("express");
const router=express.Router();

router.get("/",function(req,res){
     return res.send(" you can get all products on route /products");
 })
 module.exports=router;
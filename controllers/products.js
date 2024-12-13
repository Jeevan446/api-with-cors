const json=require("../hello.json");

async function allproducts(req,res){
    return res.json(json);
}
module.exports={allproducts}
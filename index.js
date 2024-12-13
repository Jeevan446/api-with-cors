require("dotenv").config();
const express=require("express");
const app=express();
const PORT=process.env.PORT||3000;
const cors=require("cors");
const staticRouter=require("./routers/staticRouter");
const productRouter=require("./routers/products");
app.use("/",staticRouter);
app.use("/products",productRouter);
app.use(cors());
app.listen(PORT,function(){
    console.log(`port is listening to ${PORT} port`);
})


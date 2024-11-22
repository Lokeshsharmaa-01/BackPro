import express,{ Router } from "express";

const route = express.Router();

const cust = route.post('/cus',(req,res)=>{
    console.log("this is customer route");
    
})
export default cust;



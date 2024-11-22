import express from 'express'

const route = express.Router();

const admin = route.post('/admin',(req,res)=>{
    res.status(200).json({
        n:req.query
    })
})

export default admin
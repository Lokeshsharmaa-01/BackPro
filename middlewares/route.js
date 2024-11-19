import express, { Router } from 'express'

const router = express.Router();

router.use((req,res,next)=>{
    console.log("Middleware is Working fine from router")
    next()
})

router.get('/rr',(req,res)=>{
    res.status(200).send("Hello from router")
})

export default router;
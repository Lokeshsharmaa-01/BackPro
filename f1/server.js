import express, { json } from 'express'

const app = express();

app.use(express.json())

app.get('/home',(req,res)=>{
    res.send('Hello');
})

app.post('/h1',(req,res)=>{
    res.status(200).json({
        email: req.body.email
    })
})
app.post('/h2',(req,res)=>{
    const {name, age} = req.query
    res.send(name)
})

app.listen(4000,()=>{
    console.log("server is running on port no 4000");
    
})
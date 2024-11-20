import express, { json } from 'express'
import DBConnection from './DB/ind.js';
import multer from 'multer';

DBConnection()

const app = express();
app.use(express.json())


const upload = multer({ dest: './uploads' })

app.post('/a',upload.single('myfile'),(req,res)=>{
    console.log(req.file);
    
    res.send("file upload successfully")
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
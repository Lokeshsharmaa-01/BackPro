import express, { Router } from 'express'
import multer from 'multer';
import cust from './routes/customer.js';
import admin from './routes/admin.js';


const app = express();
app.use(cust)
app.use(admin)


const uploads = multer({dest: './uploads'})


app.post('/aa',uploads.single('file'),(req,res)=>{
    res.send("file uploaded successfully")
})

app.get('/',(req,res)=>{
    res.send('hi')
})


app.listen(4000,()=>{
    console.log('server is running on port 4000')
})
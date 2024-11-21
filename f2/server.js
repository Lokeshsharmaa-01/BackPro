import express from 'express'

const app = express();


const uploads = multer.uploads({dest: './uploads'})


app.post('/aa',uploads.singel('myfile'),(req,res)=>{
    app.send("file uploaded successfully")
})

app.get('/',(req,res)=>{
    res.send('hi')
})


app.listen(4000,()=>{
    console.log('server is running on port 4000')
})
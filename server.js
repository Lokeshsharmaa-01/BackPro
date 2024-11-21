import express from "express";
import {ff, fff} from "./controllers/first.js";
import connectDB from "./DB/Db.js";
import { student } from "./models/student.js";
import router from "./middlewares/route.js";
const app = express();
app.use(express.json());
app.get("/a", ff);
app.get("/b", fff);
app.use(router)
// app.post("/login", log);

connectDB()

const ss = new student({name:"lokesh"})
ss.save().then((d)=>console.log("saved successfully"))
.catch((e)=>console.log(e))


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.send({
    email , password
  }) // Outputs: user@example.com
  // Continue processing the request...
});

app.get('/mm',(req,res,next)=> {

  const mid = req.method
  if(mid === 'GET')
  console.log("hi i am middleware")
  next();
}
,(req,res,next)=>{
  res.send("login successfully")
})


app.get('/am',(req,res)=>{
  res.status(200).json({
    email: req.body.email

  })
})


app.listen(4000, () => {
  console.log("server is running on 4000");
});

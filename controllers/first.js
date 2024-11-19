

const ff =   (req, res) => {
    res.json({
      msg: "Hello yaron kaise ho aap log",
    });
  }
const fff =   (req, res) => {
    res.send("hii")
  }


// const log = (req,res)=>{
//     res.status(200).json({

//         email:req.body.email
//     })
// }
export {ff , fff };
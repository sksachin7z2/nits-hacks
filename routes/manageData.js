
const express =require('express');
const router=express.Router();
const ManageData=require('../models/ManageData')

// route 1 Create a User using :POST "/api/auth/createUser". Doesn't require auth no login requiered
router.post('/createDataManage',async(req,res)=>{
 
//check whether the user with this email exists already
try{
  const {email,hostel,weight,nature,size,density,moisture,pH,toxicity,biodegradable,recyclable,domestic,composite}=req.body;
//create user
if(nature==='biodegradable'){


    let userData= await ManageData.create({
        email:email,
        hostel:hostel,
      })
}
if(nature==='recyclable'){
    let userData= await ManageData.create({
        email:email,
        hostel:hostel,
      })
}
if(nature==='domestic'){
    let userData= await ManageData.create({
        email:email,
        hostel:hostel,
      })
}
if(nature==='composite'){
    let userData= await ManageData.create({
        email:email,
        hostel:hostel,
      })
}
  

  success=true;
  res.json({success:success,status:"data added succesfully",userData});
  
    }catch (error){
      console.error(error.message);
      res.status(500).send("Internal Server Error Occured")
    }
  })
  router.get("/fetchalluserdata", async (req, res) => {
    try {
        const {email}=req.header;
      const userDatas = await UserData.find({ email: email});
    
      res.json(userDatas);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  });

  router.post('/updateDataUser:id',async(req,res)=>{
 
    const {email,nature,weight,size,density,moisture,pH,toxicity}=req.body;
      try {
        //create a newNote object
        const newData = {};
        if (email) {
          newData.email = email;
        }
        if (nature) {
          newData.nature = nature;
        }
        if (weight) {
          newData.weight = weight;
        }
        if (size) {
          newData.size= size;
        }
        if (density) {
          newData.density= density;
        }
        if (moisture) {
          newData.moisture= moisture;
        }
        if (pH) {
          newData.pH= pH;
        }
        if (toxicity) {
          newData.toxicity= toxicity;
        }
    
        //find the note to be updated and update it
        let userData = await UserData.findById(req.params.id);
        if (!userData) {
          return res.status(404).send("Not found");
        }
        userData= await UserData.findByIdAndUpdate(
          req.params.id,
          { $set: newData },
          { new: true }
        );
        res.json({ userData });
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured");
      }
    
      })
     
      //Route 4 to delte a note in User detail using :DELETE: "/api/notes/deletenote".login requiered
      router.delete("/deleteUserData/:id", async (req, res) => {
      
        try {
          //find the note to be delted and deleted it
          let data = await UserData.findById(req.params.id);
          if (!data) {
            return res.status(404).send("Not found");
          }
          data = await UserData.findByIdAndDelete(req.params.id);
          res.json({ success: "userData has been deleted", data: data });
        } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error Occured");
        }
      });
//   router.post('/login',async(req,res)=>{
//       let success=false;
  
//  const {email}=req.body;
//  try {
//    let user=await User.findOne({email:email});
//    if(!user){
//     return res.status(400).json({success:success,error:"please try to login with corrrect credentials"});

//    }
//   success=true;
//   res.json({success:success,status:"logged in"})
  
//  } catch (error) {
//   console.error(error.message);
//   res.status(500).send("Internal Server Error Occured")
   
//  }

//   })
    //Route 3 get logged in User detail using :POST "/api/auth//getuser".login requiered
  //   router.post('/getuser',fetchuser,async(req,res)=>{
  //   try {
  //    const userId=  req.user.id;
  //     const user= await User.findById(userId).select("-password")
  //     res.send(user)
  //   } catch (error) {
  //     console.error(error.message);
  //     res.status(500).send("Internal Server Error Occured")
  //   }
  // })

  //Route 4 to delte a user in User detail using :DELETE: "/api/auth/deleteuser".login requiered
// router.delete("/deleteuser/:id", fetchuser, async (req, res) => {

//   try {
//     //find the user to be delted and deleted it
//     let user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).send("User Not found");
//     }
//     //allow deletion if owner owns the account
//     if (user._id.toString() !== req.user.id) {
//       return res.status(401).send("not authorised");
//     }
//     user = await User.findByIdAndDelete(req.params.id);
//     res.json({ success: "your account has been deleted"});
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error Occured");
//   }
// });
module.exports = router
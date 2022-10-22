
const express =require('express');
const router=express.Router();
const User=require('../models/Student')


// route 1 Create a User using :POST "/api/auth/createUser". Doesn't require auth no login requiered
router.post('/createUser',async(req,res)=>{
 
//check whether the user with this email exists already
try{
  const {email,dp,name}=req.body;
let user= await User.findOne({email:email});
if(user){
  return res.status(400).json({success:success,error:"Sorry a user with this email already exists"}) 
}

//create user
   user= await User.create({
        name: name,
        profilepic:dp,
        email:email
      })

  success=true;
  res.json({success:success,status:"account created succesfully"});
  
    }catch (error){
      console.error(error.message);
      res.status(500).send("Internal Server Error Occured")
    }
  })

  router.post('/updateUser',async(req,res)=>{
 
      const {name,email,dp,hostel,scholarid} = req.body;
      try {
        //create a newNote object
        const newData = {};
        if (name) {
          newData.name = name;
        }
        if (email) {
          newData.email = email;
        }
        if (dp) {
          newData.profilepic = dp;
        }
        if (hostel) {
          newData.hostel = hostel;
        }
        if (dp) {
          newData.scholarid = scholarid;
        }
    
        //find the note to be updated and update it
        let user = await User.findOne({email:email});
        if (!user) {
          return res.status(404).send("Not found");
        }
        user = await User.findByIdAndUpdate(
          user._id,
          { $set: newNote },
          { new: true }
        );
        res.json({ user });
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured");
      }
    
      })
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
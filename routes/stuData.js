
const express =require('express');
const router=express.Router();
const UserData=require('../models/studentData')

// route 1 Create a User using :POST "/api/auth/createUser". Doesn't require auth no login requiered
router.post('/createDataUser',async(req,res)=>{
//check whether the user with this email exists already
try{
    const {email,hostel,weight,nature,size,density,moisture,pH,toxicity,biodegradable,recyclable,domestic,nonBiodegradable}=req.body;
    //create user
    const studentdata=await UserData.find({email:email});
    if(!studentdata){
        let arr=Array(365).fill(0);
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        console.log('Day of year: ' + day);
        let arr1=arr;
        arr1[now]+=weight;
        if(nature==='biodegradable'){
            let userData= await UserData.create({
                email:email,
                hostel:hostel,
                biodegradable:arr1,
                recyclable:arr,
                nonBiodegradable:arr,
                domestic:arr
              })
        }
        if(nature==='recyclable'){
            let userData= await UserData.create({
                email:email,
                hostel:hostel,
                biodegradable:arr,
                recyclable:arr1,
                nonBiodegradable:arr,
                domestic:arr
              })
        }
        if(nature==='nonBiodegradable'){
            let userData= await UserData.create({
                email:email,
                hostel:hostel,
                biodegradable:arr,
                recyclable:arr,
                nonBiodegradable:arr1,
                domestic:arr
              })
        }
        if(nature==='domestic'){
            let userData= await UserData.create({
                email:email,
                hostel:hostel,
                biodegradable:arr,
                recyclable:arr,
                nonBiodegradable:arr,
                domestic:arr1
              })
        }
        res.json({status:"succesfukky created"});
    }
    else{
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        console.log('Day of year: ' + day);
        let arr1=studentdata?.nature;
        arr1[now]+=weight;

        const updated_data=await UserData.findOneAndUpdate({email:email},{nature:arr1},{new:true});
        res.json({status:"succesfully updated",updated:updated_data});
      
    }

  success=true;
 
  
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
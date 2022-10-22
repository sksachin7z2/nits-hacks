
const express =require('express');
const router=express.Router();
const StuData=require('../models/studentData')
const UserData=require('../models/ManageData')

// route 1 Create a User using :POST "/api/auth/createUser". Doesn't require auth no login requiered
const sumArray = (array) => {
  const newArray = [];
  array.forEach(sub => {
     sub.forEach((num, index) => {
        if(newArray[index]){
           newArray[index] += num;
        }else{
           newArray[index] = num;
        }
     });
  });
  return newArray;
}
router.post('/createDataManageUser',async(req,res)=>{
 
//check whether the user with this email exists already
try{
    const {email,hostel,weight,nature,size,density,moisture,pH,toxicity,biodegradable,nonBiodegradable,recyclable,domestic}=req.body;
    //create user
    // const group=await StuData.aggregate([{$group:{_id:"$hostel"}}]);
    // const len=group.length;

   
    const studentdata=await StuData.find();
    const biodegradabler=[];
    const nonBiodegradabler=[];
    const recyclabler=[];
    const domesticr=[];
    studentdata.forEach((e)=>{
      biodegradabler.push(e.biodegradable);
    })
    studentdata.forEach((e)=>{
      nonBiodegradabler.push(e.nonBiodegradable);
    })
    studentdata.forEach((e)=>{
      recyclabler.push(e.recyclable);
    })
    studentdata.forEach((e)=>{
      domesticr.push(e.domestic);
    })
  const b=sumArray(biodegradabler);
  const nb=sumArray(nonBiodegradabler);
  const r=sumArray(recyclabler);
  const d=sumArray(domesticr);
  const hostelData=await UserData.find();
    if(hostelData.length===0)
    {
      await UserData.create({
        hostel:"BH1",
        biodegradable:b,
        nonBiodegradable:nb,
        recyclable:r,
        domestic:d
      })
      await UserData.create({
        hostel:"BH2",
        biodegradable:b,
        nonBiodegradable:nb,
        recyclable:r,
        domestic:d
      })
      await UserData.create({
        hostel:"BH3",
        biodegradable:b,
        nonBiodegradable:nb,
        recyclable:r,
        domestic:d
      })
      await UserData.create({
        hostel:"BH4",
        biodegradable:b,
        nonBiodegradable:nb,
        recyclable:r,
        domestic:d
      })
    }
    else{
      const updated_data=await UserData.findOneAndUpdate({hostel:'BH1'},{ biodegradable:b,
        nonBiodegradable:nb,
        recyclable:r,
        domestic:d},{new:true});
    
      const updated_dat=await UserData.findOneAndUpdate({hostel:'BH2'},{ biodegradable:b,
        nonBiodegradable:nb,
        recyclable:r,
        domestic:d},{new:true});
    
      const updated_da=await UserData.findOneAndUpdate({hostel:'BH3'},{ biodegradable:b,
        nonBiodegradable:nb,
        recyclable:r,
        domestic:d},{new:true});
    
      const updated_d=await UserData.findOneAndUpdate({hostel:'BH4'},{ biodegradable:b,
        nonBiodegradable:nb,
        recyclable:r,
        domestic:d},{new:true});
    
      }
    }catch (error){
      console.error(error.message);
      res.status(500).send("Internal Server Error Occured")
    }
  })
  router.get("/fetchallmanageuserdata", async (req, res) => {
    try {
       
      const userDatas = await UserData.find();
    
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
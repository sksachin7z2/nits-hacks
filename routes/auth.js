
const express =require('express');
const router=express.Router();
const User=require('../models/User')
const {body,validationResult}=require('express-validator')
const bcrypt= require('bcryptjs')
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET="Harryisagoodb$oy"
// route 1 Create a User using :POST "/api/auth/createUser". Doesn't require auth no login requiered
router.post('/createUser',[
    body('name','enter the valid name').isLength({min:3}),
    body('password','password must be atleast of 5 character').isLength({min:5}),
    body('email',"enter the valid email").isEmail(),
],async(req,res)=>{
  let success=false;
  // if there are AuthenticatorAssertionResponse,return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
//check whether the user with this email exists already
try{
let user= await User.findOne({email:req.body.email});
if(user){
  return res.status(400).json({success:success,error:"Sorry a user with this email already exists"}) //galat kar raha hai
}
const salt=await bcrypt.genSalt(10);
const secPass=await bcrypt.hash(req.body.password,salt);

//create user
   user= await User.create({
        name: req.body.name,
        password: secPass,
        email:req.body.email
      })
  //  .then(user => res.json(user))
  //   .catch(err=>{console.log(err)
  //   res.json({
  //     error:"enter the unique value",message:err.message
  //   })});
  const data={
    user:{
      id:user.id
    }
  }
  const authToken = jwt.sign(data, JWT_SECRET);
  success=true;
  res.json({success:success,authToken:authToken,userId:data.user.id})
  
    }catch (error){
      console.error(error.message);
      res.status(500).send("Internal Server Error Occured") //code me garbar hain
    }
  })


  //Route 2 Authenticate a User using :POST "/api/auth/login". Doesn't require auth no login requiered
  router.post('/login',[
  
    body('email',"enter the valid email").isEmail(),
    body('password',"password cannot be blank").exists(),
    
  ],async(req,res)=>{
      let success=false;
  // if there are any mistake,return bad request and the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
 const {email,password}=req.body;
 try {
   let user=await User.findOne({email:email});
   if(!user){
    return res.status(400).json({success:success,error:"please try to login with corrrect credentials"});

   }
   const passwordCompare=await bcrypt.compare(password,user.password);
   if(!passwordCompare){
    success=false;
    return res.status(400).json({ success:success,error:"please try to login with corrrect credentials"});
    
   }
   const data={
    user:{
      id:user.id
    }
  }
  const authToken = jwt.sign(data, JWT_SECRET);
  success=true;
  res.json({success:success,authToken:authToken,userId:data.user.id})
  
 } catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error Occured")
   
 }

  })
    //Route 3 get logged in User detail using :POST "/api/auth//getuser".login requiered
    router.post('/getuser',fetchuser,async(req,res)=>{
    try {
     const userId=  req.user.id;
      const user= await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error Occured")
    }
  })

  //Route 4 to delte a user in User detail using :DELETE: "/api/auth/deleteuser".login requiered
router.delete("/deleteuser/:id", fetchuser, async (req, res) => {

  try {
    //find the user to be delted and deleted it
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User Not found");
    }
    //allow deletion if owner owns the account
    if (user._id.toString() !== req.user.id) {
      return res.status(401).send("not authorised");
    }
    user = await User.findByIdAndDelete(req.params.id);
    res.json({ success: "your account has been deleted"});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});
module.exports = router
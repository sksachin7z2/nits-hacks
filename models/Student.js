
const mongoose = require('mongoose');

const { Schema } = mongoose;

  const StudentSchema = new Schema({
      
   name:{type:String,
   required:true
   },
   email:{
       type:String,
       required:true
       ,unique:true
   },
   profilepic:{
       type:String,
       default:"",
       
   },
  hostel:{
    type:String,
    default:"",
  },
  scholarid:{
    type:Number,
    default:null
  }
  },{ timestamps: true});
  const Student=mongoose.model('student',StudentSchema);
  
  module.exports=Student;

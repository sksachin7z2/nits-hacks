
const mongoose = require('mongoose');

const { Schema } = mongoose;

  const ManageSchema = new Schema({
      
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
    default:""
  }
  },{ timestamps: true});
  const Manage=mongoose.model('manage',ManageSchema);
  
  module.exports=Manage;

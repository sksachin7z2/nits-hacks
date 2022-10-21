
const mongoose = require('mongoose');

const { Schema } = mongoose;

  const ManageDataSchema = new Schema({

   email:{
       type:String,
       required:true,
       unique:true
   },
   hostel:{
    type:String,
    default:""
   },
//    nature:{
//        type:String,
//        default:"",
//    },
//   density:{
//     type:String,
//     default:"",
//   },
//   weight:{
//     type:Number,
//     default:null
//   },
//   size:
//   {
//     type:String,
//     default:""
//   },
//   moisture:{
//     type:Number,
//     default:null
//   },
//   pH:{
//     type:Number,
//     default:null
//   },
//   toxicity:{
//     type:Number,
//     default:null
//   },
//   chartData:
//   {type:Number,
//   default:null
//     }
biodegradable:{
    type:Array,
    default:Array(365).fill(0),
},
composite:{
    type:Array,
    default:Array(365).fill(0),
},
recycle:{
    type:Array,
    default:Array(365).fill(0),
},
domestic:{
    type:Array,
    default:Array(365).fill(0)
}
  },{ timestamps: true});
  const Manage=mongoose.model('managedata',ManageDataSchema);
  
  module.exports=Manage;

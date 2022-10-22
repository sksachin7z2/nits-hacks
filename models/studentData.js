
const mongoose = require('mongoose');

const { Schema } = mongoose;

  const StudentDataSchema = new Schema({
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
     default:[],
 },
nonBiodegradable:{
     type:Array,
     default:[],
 },
 recyclable:{
     type:Array,
     default:[],
 },
 domestic:{
     type:Array,
     default:[]
 }
  },{ timestamps: true});
  const Student=mongoose.model('studentdata',StudentDataSchema);
  
  module.exports=Student;

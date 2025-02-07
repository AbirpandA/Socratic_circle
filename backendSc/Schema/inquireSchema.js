const mongoose = require('mongoose');
const InquirySchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    question:{
        type:String,
        required:true,
    },
    votes:{
        type:Number,
        default:0,
    },
    solution:{
        type:Array,
        default:[],

    }
    
});

module.exports= mongoose.model('Inquire', InquirySchema)
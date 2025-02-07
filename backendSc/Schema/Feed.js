const mongoose = require('mongoose');
const feedSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    text:{
        type:String,
        required:true,
    },
    videoUrl: {
        type: String,
        default: '',
    },
    image: {
        type: [String],
        default: null,
    },
    likes:{
        type:Number,
        default:0,
    },
    comments:{
        type:[String],
        default:[],

    }
    
})

module.exports= mongoose.model('Feed', feedSchema)
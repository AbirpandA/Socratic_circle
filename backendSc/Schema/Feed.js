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
        type: string,
        default: '',
    },
    image: {
        type: [],
        default: null,
    },
    likes:{
        type:Number,
        default:0,
    },
    comments:{
        type:Array,
        default:[],

    }
    
})

module.exports= mongoose.model('Feed', feedSchema)
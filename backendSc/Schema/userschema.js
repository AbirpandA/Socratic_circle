const mongoose = require('mongoose');
const userschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    teach: {
        type: Array,
        default: [],
    },
    learn: {
        type: Array,
        default: [],
    },
    connections:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    askedQuestions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }],
    Skillpoints:{
        type:Number,
        default:5,
    },
    Sessions:{
        type:Number,
        default:0,
    },
    Rating:{
        type:Number,
        default:0,
    },
    Post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }]


});
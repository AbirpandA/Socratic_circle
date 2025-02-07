const mongoose= require('mongoose');
require('dotenv').config();
const connectDb=async()=>{
    try{
        const conn = await mongoose.connect(process.env.MongoDbURI);

        console.log(`MongoDb connected ${conn.connection.host}`);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}
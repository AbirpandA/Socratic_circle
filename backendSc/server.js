const express=require('express');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/ping',(req,res)=>{
    res.send('This is an endpoint');
});

app.listen(3000,()=>{
    console.log('Server is running on port 5000');
});
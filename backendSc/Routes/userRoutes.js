const userModel=require("../Schema/userschema")
const express=require("express")
const multer=require('multer')
const path=require('path')
const userRoute=express.Router()
const {loginSchema, resigsterSchema}=require("../Schema/registerSchema")

userRoute.post('/register',async(req,res)=>{
    // const { error } = resigsterSchema.validate(req.body);
    // if (error) {
    //     return res.status(400).send(error.details[0].message);
    // }
    if(req.body.username && req.body.email && req.body.password){
        const existingUser = await userModel.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).send('Username already exists.');
        }
        console.log(req.body)
    }
    const newUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        teach: req.body.teach,
        learn: req.body.learn,
    });

    try {
        await newUser.save();
        res.status(201).send('User registered successfully!');
    } catch (err) {
        res.status(500).send('Error registering user.');
    }
})

userRoute.post('/login', async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Invalid email or password.');
    }

    if (user.password !== req.body.password) {
        return res.status(400).send('Invalid email or password.');
    }

    res.status(200).send('Login successful!');
})

module.exports = userRoute;



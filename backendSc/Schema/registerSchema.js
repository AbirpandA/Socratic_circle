const joi=require("joi");
const resigsterSchema=joi.object({
    username:joi.string().min(4).max(100).required(),
    password:joi.string().min(4).max(100).required(),
    teach:joi.string().required(),
    learn:joi.string().required(),
})

const loginSchema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(4).max(100).required(),
})

module.exports = {loginSchema, resigsterSchema};



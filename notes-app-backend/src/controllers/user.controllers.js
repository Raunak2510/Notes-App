const User = require("../models/user.models.js");
const asyncHandler = require("../utils/asynchandler.js");

const registerUser = asyncHandler(async (req, res) => {
   
    const { email, password } = req.body;
    
    if (!email || !password) {
        console.error("Enter email and password");
        return res.status(400).send("Enter email and password");
    }
     
    const userExist= await User.findOne({email});
    if(userExist){
        console.log("user already exist");
        return res.status(400).send("User already exist");
    }
    

    const user = await User.create({ email, password });
    console.log(user);
    return res.status(201).json(user);
});

const loginUser= asyncHandler(async(req, res)=>{
    const {email, password} = req.body;
    if (!email || !password) {
        console.error("Enter email and password");
        return res.status(400).send("Enter email and password");
    }

    const user= await User.findOne({
        email
         });
     if(!user){
        return res.status(400).send("user not found");
     }
     const isPassword= await user.isPasswordCorrect(password);
     
     if(!isPassword){
        return res.status(400).send("invalid password");
     } 
     console.log("user login");
     return res.status(200).send("User Login");
})

module.exports = {registerUser, loginUser};

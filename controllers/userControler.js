const AsyncHandler= require("express-async-handler");
const User =require("../Models/userModel");
const generateToken= require("../utils/generateToken");
const registerUser =AsyncHandler(
    async(req,res)=>{
        const {  name,email,password,pic }= req.body;
        const userExists = await User.findOne({ email})
        if(userExists){
            res.status(400);
            throw new Error("User already exists") 
        }
        const user=await User.create({ name,email,password,pic })
        if(user){
            res.status(201).json({
                 _id: user._id,
                 name: user.name,
                 email:user.email,
                 isAdmin: user.isAdmin,
                 pic: user.pic, 
                 token:generateToken(user._id)
            })
        }else{
            res.status(400)
            throw new Error('error occuried')
        }
    }
)

const authUser = AsyncHandler(async(req,res)=>{
    const {email, password}=req.body
    const user= await User.findOne({ email})
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email:user.email,
            isAdmin: user.isAdmin,
            pic: user.pic, 
            token:generateToken(user.id),
       })
    }else{
        res.status(400)
        // throw new Error('Invalid email and passowrd')
    }
})
module.exports ={registerUser,authUser}  
const jwt =require("jsonwebtoken")


const generateToken = (id) => {
  return jwt.sign({id},"follyb",{
    expiresIn:"30d"})
}

module.exports=generateToken

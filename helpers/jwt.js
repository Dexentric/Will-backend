const jwt = require("jsonwebtoken");

const signToken = (value) => { 
    return jwt.sign({
        _id: value._id,
        email: value.email,
        companyname: value.companyname,
    }, process.env.JWT_TOKEN, {expiresIn: "30d"});
}

const verifyToken = (token) => { 
    return jwt.verify(token, process.env.JWT_TOKEN);
}


module.exports = { 
    signToken, verifyToken
}
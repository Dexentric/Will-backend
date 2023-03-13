'use strict';
const User = require('../models/user-model');
const bcrypt = require('bcryptjs');
const { signToken } = require('../helpers/jwt');
//const jwt = require('jsonwebtoken');
//signUP
// exports.signUp = async (req, res) => {
//     try {
//         // const newUser = await User.create({companyname,email, password});
//         const newUser = await User.create(req.body);

//         if (newUser) {

//           return    res.status(201).json({
//                 ...newUser?._doc, user_token: signToken(newUser)
//             }) 
            
//         }

//        return res.status(400).send("an error occurred while creating")
//     } catch (error) {
//         // console.log(error);
// return res.status(400).send(error || error.message);
//     }
// }


// console.log(req.body)
// const { companyname, email, password } = await req.body;
// if (!companyname || !email || !password) {
//     return res.status(400).json({ error: 'enter the correct details' });

// }
// //avoiding duplicate user 
// User.findOne({ email: email })
//     .then((dbUser) => {
//         if (dbUser) {
//             res.status(500).json({ error: 'user already exist' });
//         }
//         bcrypt.hash(password, 16)

//             .then((hashedPassword) => {
//                 const user = new User({ companyname, email, password: hashedPassword });
//                 user.save()
//                     .then((u) => {
//                         res.status(201).json('user registed successfully');
//                     })
//                     .catch((error) => {
//                         console.log(error);
//                     });

//             });


//     })
//     .catch((error) => {
//         console.log(error);
//     });



//login 
// exports.login = async (req, res) => {
//     const { email, password } = await req.body;
//     if (!email || !password) {
//         return res.status(400).json({ error: 'enter the correct details' });
//     }
//     try {
//         const findUser = await User.findOne({ email: email }).select("password");

//         if (!findUser) {
//             return res.status(400).send("User not found")
//         }
//         const verifyPassword = bcrypt.compare(password, findUser.password);

//         if (findUser && verifyPassword) {

//             const user = await User.findOne({ email });

//             return res.status(200).json({

//                 ...user?._doc, user_token: signToken(findUser)

//             })
//         }
//     } catch (error) {
//         console.log(error);

//     }
// }

// module.exports={
//     signUp,
//     login
// }
//routing for Rigister
//app.post('/register', (req, res)=> {

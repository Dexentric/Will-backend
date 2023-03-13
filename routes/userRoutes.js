const express =require('express')
const router = express.Router()
const {registerUser,authUser} = require('../controllers/userControler')
router.route('/register').post(registerUser)
router.route('/login').post(authUser)
module.exports = router
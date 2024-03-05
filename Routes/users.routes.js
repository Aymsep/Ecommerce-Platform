const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUserProfile } = require('../Controllers/users.Controllers');
const { isAuthenticate } = require('../Middlwares/auth.middleware');
const router = express.Router();


//Authentication

router.post('/auth/register',registerUser)
router.post('/auth/login',loginUser)

//User Profile

router.route('/profile')
.all(isAuthenticate)
.get(getUserProfile)
.put(updateUserProfile)  
.delete(deleteUserProfile)




module.exports = router;
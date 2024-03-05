const { checkExitingMail, saveUser, getUser, getProfile, updateProfile, deleteProfile } = require("../Modals/Methods/user.Methods")
const Strings = require("../Config/constants")
const {Api:{User}} = require('../Config/config')
const { filterBody } = require("../Helpers/Query/query")
const response = require("../Helpers/response")
const MailSender = require("../Helpers/sendMail")
const { VerifyPassword, HashPassword } = require("../Helpers/Hashing")
const { sign } = require("../Helpers/JWT")

exports.registerUser = async (req, res) => {
    try{
       const data  = await filterBody(req.body,User.ALLOWED_FIELDS)
       if(!data){
           return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.INVALID_FIELDS) 
        }
        const user = await checkExitingMail(data.email)
        if(user){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.EMAIL_EXISTS) 
        }
        data.password = await HashPassword(data.password)
        const newUser = await saveUser(data)
        if(!newUser){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.POST_FAILURE_MESSAGE) 
        }
        return response(res, Strings.SERVER_CREATED_HTTP_CODE, {message:Strings.POST_SUCCESS_MESSAGE, data:newUser})

    }catch(error){
        response(res, Strings.SERVER_INTERNAL_ERROR_HTTP_CODE, error.message)
    }
}


exports.loginUser = async (req, res) => {
    try{
        const data = await filterBody(req.body, User.ALLOWED_LOGIN_FIELDS)
        if(!data){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.INVALID_FIELDS) 
        }
        const user = await checkExitingMail(data.email)
        if(!user){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.NO_USER_FOUND) 
        }
        const matchedPassword = await VerifyPassword(data.password, user.password) 
        if(!matchedPassword){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.PASSWORD_INCORRECT) 
        }
        const token = sign({email:user.email, id:user._id, role:user.role, username:user.username})
        if(!token){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.TOKEN_ERROR) 
        }
        return response(res, Strings.SERVER_OK_HTTP_CODE,{token, msg:'logged'})
    }catch(error){
        response(res, Strings.SERVER_INTERNAL_ERROR_HTTP_CODE, error.message)
    }
}


exports.getUserProfile = async (req, res) => {
    try{
        const {id} = req.user
        const user = await getProfile(id)
        if(!user){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.NO_USER_FOUND) 
        }
        return response(res, Strings.SERVER_OK_HTTP_CODE, {msg:Strings.GET_SUCCESS_MESSAGE, data:user})
    }catch(error){
        response(res, Strings.SERVER_INTERNAL_ERROR_HTTP_CODE, error.message)
    }   
}


exports.updateUserProfile = async (req, res) => {
    try{
        const {id} = req.user
        const data  = await filterBody(req.body,User.ALLOWED_UPDATE_FIELDS)
        if(!data){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.INVALID_FIELDS) 
        }
        const user = await getProfile(id)
        if(!user){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.NO_USER_FOUND) 
        }
        const updatedUser = await updateProfile(id,data)
        if(!updatedUser){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.PATCH_FAILURE_MESSAGE) 
        }
        return response(res, Strings.SERVER_OK_HTTP_CODE,{msg:Strings.PATCH_SUCCESS_MESSAGE, data:updatedUser})
    }catch(error){
        response(res, Strings.SERVER_INTERNAL_ERROR_HTTP_CODE, error.message)
    }
}


exports.deleteUserProfile = async (req, res) => {
    try{
        const {id} = req.user
        const user = await getProfile(id)
        if(!user){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.NO_USER_FOUND) 
        }
        const deletedUser = await deleteProfile(id)
        if(!deletedUser){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.DELETE_FAILURE_MESSAGE) 
        }
        return response(res, Strings.SERVER_OK_HTTP_CODE,{msg:Strings.DELETE_SUCCESS_MESSAGE, data:deletedUser})
    }catch(error){
        response(res, Strings.SERVER_INTERNAL_ERROR_HTTP_CODE, error.message)
    }
}
const Strings = require('../Config/constants');
const { verify } = require('../Helpers/JWT');
const response = require('../Helpers/response');

exports.isAuthenticate = (req, res, next) => {
    const token = (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) ? req.headers.authorization.split(' ')[1] : null; 
    if(!token){
        return response(res, Strings.SERVER_UNAUTHORIZED_HTTP_CODE, Strings.ACCESS_DENIED)
    }
    try{
        const decoded = verify(token) 
        req.user = decoded
        
        next()
    }catch(error){
        return response(res, Strings.SERVER_UNAUTHORIZED_HTTP_CODE, Strings.ACCESS_DENIED)
    }
}
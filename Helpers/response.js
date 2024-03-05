module.exports = async (res,code,message)=>{
    return res.status(code).json({message})
}
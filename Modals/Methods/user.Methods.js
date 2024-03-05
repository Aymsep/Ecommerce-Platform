const User = require('../Schema/user.Schema')



exports.checkExitingMail = async (email) => {
    try {
        const user = await User.findOne({ email })   
        return user
    }
    catch (error) {
        throw new Error(error)
    }
}



exports.saveUser = async (data) => {
    try {
        const user = new User(data)
        const savedUser = await user.save()
        return savedUser
    }
    catch (error) {
        throw new Error(error)
}
}


exports.getProfile = async (id) => {
    try {
        const user = await User.findById(id).select({password:0, __v:0, createdAt:0, updatedAt:0, _id:0,lastLogin:0})
        return user
    }
    catch (error) {
        throw new Error(error)
    }                    
}


exports.updateProfile = async (id, data) => {
    try {
        const user = await User.findByIdAndUpdate(id, data, {new:true})
        return user
    }
    catch (error) {
        throw new Error(error)
    }
}


exports.deleteProfile = async (id) => {
    try {
        const user = await User.deleteOne({_id:id})
        if(user.deletedCount === 0){
            throw new Error('User not found')
        }
        return 'User deleted successfully'
    }
    catch (error) {
        throw new Error(error)
    }
}
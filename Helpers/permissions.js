const {roles} = require('../Config/roles');



class Permissions{
    constructor(){
        this.Permissions = []
    }
    getPermissionsByRoleName(roleName){
        const role = roles.find(role => role.name === roleName);
        return role? role.permissions : [];
    }
}

module.exports = new Permissions;
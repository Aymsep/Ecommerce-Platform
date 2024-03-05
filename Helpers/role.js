const {roles} = require('../Config/roles');


class Role{
    constructor(role){
        this.role = roles;
    }
    getRoleByName(name){
        return this.role.find(role => role.name === name);
    }
    getRoles(){
        return this.role
    }
}

module.exports = new Role;
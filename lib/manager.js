const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, role, office) {
        super (name, id, email, role)
        this.office = office;
    }

    getOffice() {
        return this.office;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;
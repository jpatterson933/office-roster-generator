//this creates my basic employee class that applies to ALL employees
class Employee {
    //every employee has these ids so we will use these as our base building block for everything else
    constructor (name, id, email, role) {
        this.name = name;
        this.id = id,
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

//this exports my employee class
module.exports = Employee;
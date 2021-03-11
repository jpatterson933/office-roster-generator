const Employee = require('./employee')

class Engineer extends Employee {
    constructor (name, id, email, role, gitHub) {
        super (name, id, email, role)
            this.gitHub = gitHub;
        
    }

    getGit() {
        return this.gitHub;
    }
}

module.exports = Engineer;
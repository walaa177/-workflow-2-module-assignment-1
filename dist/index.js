//Question 1
let towType;
//Question 2
let tuple;
//Question 3
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
//Question 5
var members;
(function (members) {
    members[members["paid"] = 0] = "paid";
    members[members["unpaid"] = 1] = "unpaid";
    members[members["unknown"] = 2] = "unknown";
})(members || (members = {}));
//Question 6
class person {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        return "My name is" + this.name;
    }
}
function getDetails(name, details) { }

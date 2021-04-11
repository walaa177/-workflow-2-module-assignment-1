//Question 1
var towType;
//Question 2
var tuple;
//Question 3
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
//Question 5
var members;
(function (members) {
    members[members["paid"] = 0] = "paid";
    members[members["unpaid"] = 1] = "unpaid";
    members[members["unknown"] = 2] = "unknown";
})(members || (members = {}));
//Question 6
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.displayName = function () {
        return "My name is" + this.name;
    };
    return person;
}());
function getDetails(name, details) { }

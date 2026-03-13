var greeter = function (name) {
    console.log("Hello, " + name);
};
greeter("Cesar Gaviria");
var greeter1 = function (firstName, lastName) {
    return "Hello ".concat(firstName, " ").concat(lastName);
};
console.log(greeter1("Cesar", "Gaviria"));

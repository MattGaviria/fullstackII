var greeter = function (name) {
    console.log("Hello, " + name); }

greeter("Cesar Gaviria");

let greeter1 = (firstName: string, lastName: string): string => {
    return `Hello ${firstName} ${lastName}`;
};

console.log(greeter1("Cesar", "Gaviria"));
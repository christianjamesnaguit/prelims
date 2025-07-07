var greet = function (name) {
    this.greeting = function () {
        return "Hello, " + name + "!";
    };
};
module.exports = greet;
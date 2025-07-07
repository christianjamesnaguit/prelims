var add = function (x, y) {
    this.x = x;
    this.y = y;
    this.sum = function () {
        return x + y;
    };
};

module.exports = add;
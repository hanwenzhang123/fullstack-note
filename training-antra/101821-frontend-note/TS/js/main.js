var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num;
num = 5;
var str;
str = 'str';
var bl;
bl = true;
var u;
u = undefined;
var n;
n = null;
var x;
x = 6;
x = true;
x = undefined;
var numArr = [1, 2, 3];
var numArr2 = [1, 2, 3];
var strArr = ['str'];
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var obj = { name: 'patrick', age: 18 };
var obj2 = { name: 'patrick', age: 18 };
var obj3 = { name: 'patrick', age: 18 };
function addFn(x, y) {
    return x + y;
}
var addFn2 = function (x, y) {
    return x + y;
};
var addFn3 = function (x, y) { return x + y; };
var numOrStr;
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var CatType;
(function (CatType) {
    CatType["CuteCat"] = "CuteCat";
    CatType["SmallCat"] = "SmallCat";
})(CatType || (CatType = {}));
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name, type) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        return _this;
    }
    Cat.prototype.run = function () {
        this.name;
        return this.type + " " + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var myAn = new Animal('pat');
console.log(myAn.name);
console.log(myAn.run());
var MyCuteCat = new Cat('Ana', "CuteCat");
console.log(MyCuteCat.name);
console.log(MyCuteCat.run());
var Car = (function () {
    function Car() {
    }
    Car.prototype.openRadio = function () { };
    Car.prototype.batteryStatus = function () { };
    return Car;
}());
var Cellphone = (function () {
    function Cellphone() {
    }
    Cellphone.prototype.openRadio = function () { };
    Cellphone.prototype.batteryStatus = function () { };
    return Cellphone;
}());
function toArray(x, y) {
    return [x, y];
}
var toStrArr = toArray('a', 'b');
var toPersonArr = toArray({ name: 'patrick', age: 18 }, { name: 'patrick', age: 18 });
var Queue = (function () {
    function Queue() {
        this.queue = [];
    }
    Queue.prototype.enqueue = function (item) {
        console.log('enqueue', item);
        this.queue.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.queue.shift();
    };
    Queue.prototype.getQueue = function () {
        return this.queue;
    };
    return Queue;
}());
var q = new Queue();
console.log(q.getQueue());
q.enqueue(1);
q.enqueue(2);
console.log(q.getQueue());
var item = q.dequeue();
console.log(item);
console.log(q.getQueue());
//# sourceMappingURL=main.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.syaHi = function () {
        console.log(this.name);
    };
    // 静态方法
    Animal.isAnimal = function (a) {
        return a instanceof Animal;
    };
    Object.defineProperty(Animal.prototype, "_name", {
        get: function () {
            return this.name;
        },
        // 给 name 属性赋值会调用这个函数
        // setter 里又给 name 赋值
        // 所以会无限调用,导致栈溢出
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    // 静态属性
    Animal.age = 12;
    return Animal;
}());
var a = new Animal('cccc');
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sayHi = function () {
        console.log('Meow,' + this.name);
    };
    return Cat;
}(Animal));
var c = new Cat('aaaa');
c.sayHi();
console.log(Animal.isAnimal(a));
console.log(Animal.isAnimal(c));
console.log(Cat.age);

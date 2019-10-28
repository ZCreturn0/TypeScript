"use strict";
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
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('SecurityDoor alarm');
    };
    return SecurityDoor;
}(Door));
// 也可写成 class Car implements Alarm, LightAlarm,接口可多实现
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.lightAlarm = function () {
        console.log('Lights toggle');
    };
    Car.prototype.alert = function () {
        console.log('Car alarm');
        this.lightAlarm();
    };
    return Car;
}());
var s = new SecurityDoor();
s.alert();
var c = new Car();
c.alert();
function getCounter() {
    var counter = function (start) {
        counter.current = start;
        console.log(start);
    };
    counter.interval = 1;
    counter.current = 0;
    counter.reset = function () {
        counter.current = 0;
    };
    counter.log = function () {
        console.log(counter.current);
    };
    counter.add = function () {
        counter.current += counter.interval;
    };
    return counter;
}
var counter = getCounter();
counter(10);
counter.interval = 2;
counter.log();
counter.reset();
counter.add();
counter.log();

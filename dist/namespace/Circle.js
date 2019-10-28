"use strict";
// 引入其他文件的命名空间语法: 3斜杠 + reference
/// <reference path="./IShape.ts"/>
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle draw");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));

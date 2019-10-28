"use strict";
/// <reference path="./IShape.ts"/>
// 在同一个 namespace(Drawing) 所以不用 Drawing.IShape
var Drawing;
(function (Drawing) {
    var Rect = /** @class */ (function () {
        function Rect() {
        }
        Rect.prototype.draw = function () {
            console.log('Rect draw');
        };
        return Rect;
    }());
    Drawing.Rect = Rect;
})(Drawing || (Drawing = {}));

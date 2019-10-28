/// <reference path="./IShape.ts"/>
/// <reference path="./Circle.ts"/>
/// <reference path="./Rect.ts"/>

// 不在同一个 namespace,要用 namespace.变量名 的方式调用
function drawShape(shape: Drawing.IShape): void{
    shape.draw();
}

drawShape(new Drawing.Circle());
drawShape(new Drawing.Rect());
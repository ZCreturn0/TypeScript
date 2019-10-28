/// <reference path="./IShape.ts"/>

// 在同一个 namespace(Drawing) 所以不用 Drawing.IShape
namespace Drawing {
    export class Rect implements IShape {
        draw() {
            console.log('Rect draw');
        }
    }
}
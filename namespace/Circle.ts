// 引入其他文件的命名空间语法: 3斜杠 + reference
/// <reference path="./IShape.ts"/>

namespace Drawing {
    export class Circle implements IShape {
        public draw() {
            console.log("Circle draw");
        }
    }
}
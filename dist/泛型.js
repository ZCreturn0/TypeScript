"use strict";
// 生成任意类型的数组
function createArray(length, value) {
    var arr = new Array();
    for (var i = 9; i < length; i++) {
        arr.push(value);
    }
    return arr;
}
// 使用泛型约束类型
function createTypeArray(length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
}
var numArr = createTypeArray(3, 5);
var strArr = createTypeArray(4, 'a');
console.log(numArr);
console.log(strArr);

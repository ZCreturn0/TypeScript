"use strict";
// 函数声明
// 参数 x,y 为 number 类型,返回 number 类型
function sum(x, y) {
    return x + y;
}
// 调用函数,参数类型,参数个数不一致都会报错
console.log(sum(1));
console.log(sum(1, 2, 3));
console.log(sum('a', 2));
// 函数表达式
// 可通过编译
// 定义了右侧函数返回值,左侧 mySum 通过类型推论得到类型
var mySum = function (x, y) {
    return x + y;
};
// 正确的函数表达式
// mySum2 是返回 number 类型的函数类型,定义为等号右边的内容  ts 中 => 左边表示输入,右边表示输出
var mySum2 = function (x, y) {
    return x + y;
};
var numberEquals = function (x, y) {
    return x === y;
};
var concatString = function (x, y) {
    if (y) {
        return (x + y).toString();
    }
    else {
        return x.toString();
    }
};
// 默认参数值
// 设了默认参数后,有默认值的可选参数可放在必选参数前面
// 但参数个数不能省略!!!!!!!!
// firstName 是可选参数
function getName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'z'; }
    return firstName + ' ' + lastName;
}
// 参数个数不匹配报错
console.log(getName('c'));
console.log(getName(undefined, 'c'));
console.log(getName('t', 'c'));
// 剩余参数
// 剩余参数是个数组,可以用个数组接收
// 剩余参数只能是最后一个参数
function addAll() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (pre, cur) {
        return pre + cur;
    });
}
console.log(addAll(1, 2, 3, 4));
function reverse(p) {
    if (typeof p === 'number') {
        return Number(p.toString().split('').reverse().join(''));
    }
    else if (typeof p === 'string') {
        return p.split('').reverse().join('');
    }
    return 0;
}
console.log(reverse(123));
console.log(reverse('abc'));

"use strict";
function getLength(param) {
    // 对类型断言
    if (param.length) {
        // 要调用 length 属性,必须断言,否则不能调用(number 类型没 length 属性)
        return param.length;
    }
    // 另一种断言方式
    else if (param) {
        return param;
    }
    return 0;
}
console.log(getLength(5));
console.log(getLength('axc'));

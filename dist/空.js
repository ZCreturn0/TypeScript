// void 类型只能赋值 undefined 和 null
// 但是配置了 'strict' 后, 赋值 null 会报错
var u = undefined;
var n = null;
function hello(name) {
    console.log("Hello " + name + "!!");
}
// undefined 和 null 是所有类型的子类

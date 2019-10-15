// any 类型变量可以改变类型,其他类型不能改变类型
let n: any = 'aaa';
n = 10;
let num = 20;
// 报错
num = 'ccc';
// any类型的值可以调用任意属性和方法
let v: any = 'acg';
console.log(v.name);
console.log(v.getName());
// 定义变量未赋值会被当做 any 类型
// 定义变量赋值了会被进行类型推论,类型为当前类型
// 定义成 any 类型
let a;
a = 10;
a = 'aaaaa';
// 推论成 number 类型
let b = 10;
// 报错
b = 'ggggg';
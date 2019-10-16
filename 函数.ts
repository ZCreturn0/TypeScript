// 函数声明
// 参数 x,y 为 number 类型,返回 number 类型
function sum(x: number, y: number): number {
    return x + y;
}
// 调用函数,参数类型,参数个数不一致都会报错
console.log(sum(1));
console.log(sum(1,2,3));
console.log(sum('a',2));

// 函数表达式
// 可通过编译
// 定义了右侧函数返回值,左侧 mySum 通过类型推论得到类型
let mySum = (x: number, y: number): number => {
    return x+y;
}
// 正确的函数表达式
// mySum2 是返回 number 类型的函数类型,定义为等号右边的内容  ts 中 => 左边表示输入,右边表示输出
let mySum2: (x: number, y: number) => number = (x: number, y: number): number => {
    return x + y;
}
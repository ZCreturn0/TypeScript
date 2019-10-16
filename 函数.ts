// 函数声明
// 参数 x,y 为 number 类型,返回 number 类型
function sum(x: number, y: number): number {
    return x + y;
}
// 调用函数,参数类型,参数个数不一致都会报错
console.log(sum(1));
console.log(sum(1,2,3));
console.log(sum('a',2));
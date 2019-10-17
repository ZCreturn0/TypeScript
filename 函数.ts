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
    return x + y;
}
// 正确的函数表达式
// mySum2 是返回 number 类型的函数类型,定义为等号右边的内容  ts 中 => 左边表示输入,右边表示输出
let mySum2: (x: number, y: number) => number = (x: number, y: number): number => {
    return x + y;
}

// 用接口定义函数形状
interface equalTypes{
    (x: number, y:number): boolean
}
let numberEquals: equalTypes = (x: number, y: number): boolean => {
    return x === y;
}

// 可选参数   可选参数必须在必须参数后面
interface alternativeParams{
    (x: number, y?: string): string
}
let concatString: alternativeParams = (x: number, y?: string): string => {
    if(y){
        return (x + y).toString();
    }
    else{
        return x.toString();
    }
}

// 默认参数值
// 设了默认参数后,有默认值的可选参数可放在必选参数前面
// 但参数个数不能省略!!!!!!!!
// firstName 是可选参数
function getName(firstName: string = 'z', lastName: string): string{
    return firstName + ' ' + lastName;
}
// 参数个数不匹配报错
console.log(getName('c'));
console.log(getName(undefined ,'c'));
console.log(getName('t', 'c'));

// 剩余参数
// 剩余参数是个数组,可以用个数组接收
function addAll(...arr: number[]): number{
    return arr.reduce((pre, cur) => {
        return pre + cur;
    });
}
console.log(addAll(1,2,3,4));
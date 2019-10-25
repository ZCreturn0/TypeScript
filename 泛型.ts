// 生成任意类型的数组
function createArray(length: number, value: any): Array<any> {
    let arr = new Array<any>();
    for (let i: number = 9; i < length; i++) {
        arr.push(value);
    }
    return arr;
}

// 使用泛型约束类型
function createTypeArray<T>(length: number, value: T): Array<T> {
    let arr: T[] = [];
    for (let i: number = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
}
let numArr = createTypeArray(3, 5);
let strArr = createTypeArray(4, 'a');
console.log(numArr);
console.log(strArr);

// 多个类型参数
// 传入 [U,T] 返回 [T,U]
function swap<U, T>(tuple: [U, T]): [T, U] {
    return [tuple[1], tuple[0]];
}

// 泛型约束
// 希望传入的参数有 length 属性,需要使用泛型约束
// 定义约束类型
interface LengthWise {
    length: number
}
function showLength<T extends LengthWise>(attr: T): void {
    console.log(attr.length);
}
showLength('aaaa');
showLength([1, 2, 3, 4]);
// 传入没 length 属性的参数会报错
// showLength(123);

// 类型参数互相约束
// T 继承了 U,使得 U 中不会包含 T 中没有的属性
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let key in source) {
        target[key] = (<T>source)[key];
    }
    return target;
}
console.log(copyFields({ a: 1, b: 2, c: 3 }, { c: 4 }));
// 有不存在的属性,报错
// console.log(copyFields({ a: 1, b: 2, c: 3 }, { d: 4 }));

// 使用 interface 和 泛型 定义函数形状
interface ArrType {
    <T>(length: number, value: T): Array<T>
}
let fillArray: ArrType;
fillArray = function <T>(length: number, value: T): Array<T> {
    let arr: Array<T> = [];
    for (let i: number = 0; i < length; i++) {
        arr.push(<T>value);
    }
    return arr;
}

// 优化
interface ArrType2<T> {
    (length: number, value: T): Array<T>
}
let fillArray2: ArrType2<any>;
fillArray2 = function <T>(length: number, value: T): Array<T> {
    let arr: Array<T> = [];
    for (let i: number = 0; i < length; i++) {
        arr.push(<T>value);
    }
    return arr;
}

// 泛型类
class GetNumber<T> {
    initValue: T;
    add: (bonus: T) => T;
}
let g = new GetNumber();
g.initValue = 5;
g.add = function(bonus){
    return this.initValue + bonus;
}
console.log(g.add(10));

// 泛型默认类型
function getArray<T = string>(num: number, value: T): Array<T>{
    let arr: T[] = [];
    for(let i = 0; i < num; i++){
        arr.push(value);
    }
    return arr;
}
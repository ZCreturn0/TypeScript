// 生成任意类型的数组
function createArray(length: number, value: any): Array<any> {
    let arr = new Array<any>();
    for (let i: number = 9; i < length; i++) {
        arr.push(value);
    }
    return arr;
}

// 使用泛型约束类型
function createTypeArray<T>(length: number, value: T): Array<T>{
    let arr: T[] = [];
    for (let i: number = 0; i < length; i++){
        arr.push(value);
    }
    return arr;
}
let numArr = createTypeArray(3, 5);
let strArr = createTypeArray(4, 'a');
console.log(numArr);
console.log(strArr);

// 多个类型参数
function swap<U, T>(tuple: [U, T]): [T, U]{
    return [tuple[1], tuple[0]];
}
// 数据类型必须与数组类型一致
let arr: number[] = [1,2,3,4,5,6];
// 对数组方法进行限制
arr.push('aaa');

// 泛型定义数组
let arr2: Array<number> = [1,2,3,4,5];
console.log(arr2);

// 用接口表示数组
interface NumberArray{
    [index: number]: string
}
let str: NumberArray = ['aaa','bbb','ccc'];
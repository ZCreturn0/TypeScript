// 函数声明合并
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number|string): number|string{
    if((<string>x).length){
        return (<string>x).split('').reverse().join('');
    }
    else if(<number>x){
        return Number((<number>x).toString().split('').reverse().join(''));
    }
}

// 接口合并
interface Alarm{
    price: number;
}
interface Alarm{
    weight: string;
}
// 相当于
interface Alarm{
    price: number;
    weight: string;
}

// 合并类型必须一致
interface Alarm1 {
    price: number;
}

// price 类型不一致,报错
// interface Alarm1 {
//     price: string;
//     weight: string;
// }

// 接口方法合并方式与方法合并一致
interface Alarm3 {
    price: number;
    hello(x: string): string;
}
interface Alarm3 {
    hello(x: number): number;
}
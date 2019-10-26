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
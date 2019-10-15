let n: number | string = 12;
n = 'aaa';
// 报错,不是两种类型共有的方法
console.log(n.slice(0, 2));
// 编译通过
console.log(n.toString());
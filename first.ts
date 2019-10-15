function hello(name: string){
    return `Hello ${name}`;
}
// 参数传 123 会报错,但能编译出 js 文件
console.log(hello('World'));
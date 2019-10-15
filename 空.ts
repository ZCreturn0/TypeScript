// void 类型只能赋值 undefined 和 null
// 但是配置了 'strict' 后, 赋值 null 会报错
let u: void = undefined;
let n: void = null;

function hello(name: string): void{
    console.log(`Hello ${name}!!`);
}

// undefined 和 null 是所有类型的子类
let num: number = null;
let str: string = undefined;
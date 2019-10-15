// 定义类
interface Person{
    name: string,
    age: number,
    // 可选属性
    addr?: string
}
// 字段必须匹配,且不能缺少或增加字段
let p: Person = {
    name: 'aaa',
    age: 12
}
let p2: Person = {
    name: 'aaa',
    age: 12,
    addr: 'ccc'
}

// 任意属性
// 一旦定义了任意属性, 确定属性和可选属性都必须是任意属性类型的子类
interface Animal{
    // name 和 age 必须是 boolean 的子类,否则报错
    name: string,
    age: number,
    [propName: string]: boolean
}

let a: Animal = {
    name: 'aaa',
    age: 3
}

// 正确用法
interface Dog{
    name: string,
    age: number,
    [propName: string]: string|number
}
let d:Dog = {
    name: 'aaa',
    age: 3,
    weight: 10
};

// 只读属性
interface Cat{
    name: string,
    age: number,
    readonly sex: string
}
// 只读属性必须在声明对象的时候赋值
let c:Cat = {
    name: 'aaa',
    age: 3,
    sex: 'male'
};
// 只读属性不能再赋值
c.sex = 'female';
let c1:Cat = {
    name: 'aaa',
    age: 3
    // 声明时未给 sex 赋值,报错
};
// 只读属性不能再赋值
c1.sex = 'male';
// 字符串字面量类型,类似枚举类型,注意用 type 定义
type Fruits = 'apple' | 'banana' | 'orange';
function eat(fruit: Fruits): void{
    console.log(`I eat ${fruit}.`);
}
console.log(eat('apple'));
// 报错
console.log(eat('aaa'));
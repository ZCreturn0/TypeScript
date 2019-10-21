class Animal{
    protected name: string;
    // 静态属性
    static age: number = 12;
    constructor(name){
        this.name = name;
    }
    syaHi(){
        console.log(this.name);
    }
    // 静态方法
    static isAnimal(a){
        return a instanceof Animal;
    }
    get _name(){
        return this.name;
    }
    // 给 name 属性赋值会调用这个函数
    // setter 里又给 name 赋值
    // 所以会无限调用,导致栈溢出
    set _name(name){
        this.name = name;
    }
}
let a = new Animal('cccc');

class Cat extends Animal{
    constructor(name){
        super(name);
    }
    sayHi(){
        console.log('Meow,'+this.name);
    }
}

let c = new Cat('aaaa');
c.sayHi();
console.log(Animal.isAnimal(a));
console.log(Animal.isAnimal(c));
console.log(Cat.age);

// 构造被 protected 修饰时,该类只能被继承
class Person{
    protected name: string;
    // 在构造里赋值后不能更改
    readonly life: number;
    protected constructor(name){
        this.name = name;
        this.life = 100;
    }
}
// 报错,新建对象要访问构造函数,但构造函数被 protected 修饰,只能在子类访问
// let p = new Person('aaaa');

// 抽象类
// 抽象类不能创建实例,只能被子类继承,且子类必须实现抽象类里面的抽象方法
abstract class Fruit{
    protected readonly name: string;
    constructor(name){
        this.name = name;
    }
    // 抽象方法不能写实现
    public abstract taste();
}

class Apple extends Fruit{
    constructor(name){
        super(name);
    }
    // 在子类实现抽象方法
    public taste(){
        console.log('sweet');
    }
}

let apple: Apple = new Apple('apple');
apple.taste();
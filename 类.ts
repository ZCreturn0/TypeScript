class Animal{
    protected name: string;
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
class Animal{
    constructor(name){
        this.name = name;
    }
    syaHi(){
        console.log(this.name);
    }
    get name(){
        return this.name;
    }
    set name(name){
        this.name = name;
    }
}

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
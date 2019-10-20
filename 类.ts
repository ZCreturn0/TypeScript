class Animal{
    protected name: string;
    constructor(name){
        this.name = name;
    }
    syaHi(){
        console.log(this.name);
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
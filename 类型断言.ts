function getLength(param: number | string): number{
    // 对类型断言
    if((<string>param).length){
        // 要调用 length 属性,必须断言,否则不能调用(number 类型没 length 属性)
        return (<string>param).length;
    }
    // 另一种断言方式
    else if((param as number)){
        return (param as number);
    }
    return 0;
}
console.log(getLength(5));
console.log(getLength('axc'));
// 类型别名: 为类型另取一个名字
type Name = string;
type LogName = () => void;
type SayName = Name | LogName;
function tellName(name: SayName): void {
    if (<Name>name) {
        console.log(<Name>name);
    }
    else if (<LogName>name) {
        (name as LogName)();
    }
}
tellName('aaa');
tellName(() => {
    console.log('bbb');
});
// enum 定义枚举类型
enum Days { Sun, Mon, Tue, Wen, Thu, Fri, Sat };
// 依次按数字作为 key
console.log(Days['Sun'] === 0);
console.log(Days[0] === 'Sun');
// 可手动定义 key
enum Letters { A = 1, B = 3, C, D, E };
// 未手动赋值的会接着上一个 key 递增
console.log(Letters['B'] === 3);
console.log(Letters['C'] === 4);
console.log(Letters[5] === 'D');
// 递增 key 可能会覆盖
enum Colors {red = 1, orange = 3, yellow = 2, green, blue, purple};
console.log(Colors['orange'] === 3);        // true
// 被后面 green 覆盖
console.log(Colors[3] === 'orange');        // false
console.log(Colors['green'] === 3);         // true
console.log(Colors[3] === 'green');         // true

// key 可为小数,字符串,字符串后必须手动指定 key
enum Test {one, two, three = 4.5, four, five = <any>'aaa', six = <any>'bbb'};
console.log(Test['one']);
console.log(Test['three']);
console.log(Test['four']);
console.log(Test['five']);
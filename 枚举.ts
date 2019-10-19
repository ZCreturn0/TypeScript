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
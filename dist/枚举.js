"use strict";
// enum 定义枚举类型
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wen"] = 3] = "Wen";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
// 依次按数字作为 key
console.log(Days['Sun'] === 0);
console.log(Days[0] === 'Sun');
// 可手动定义 key
var Letters;
(function (Letters) {
    Letters[Letters["A"] = 1] = "A";
    Letters[Letters["B"] = 3] = "B";
    Letters[Letters["C"] = 4] = "C";
    Letters[Letters["D"] = 5] = "D";
    Letters[Letters["E"] = 6] = "E";
})(Letters || (Letters = {}));
;
// 未手动赋值的会接着上一个 key 递增
console.log(Letters['B'] === 3);
console.log(Letters['C'] === 4);
console.log(Letters[5] === 'D');
// 递增 key 可能会覆盖
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 1] = "red";
    Colors[Colors["orange"] = 3] = "orange";
    Colors[Colors["yellow"] = 2] = "yellow";
    Colors[Colors["green"] = 3] = "green";
    Colors[Colors["blue"] = 4] = "blue";
    Colors[Colors["purple"] = 5] = "purple";
})(Colors || (Colors = {}));
;
console.log(Colors['orange'] === 3);
console.log(Colors[3] === 'orange');
console.log(Colors['green'] === 3);
console.log(Colors[3] === 'green');

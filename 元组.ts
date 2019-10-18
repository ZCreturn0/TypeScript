// 元组: 含有不同类型的数组
let tuple: [string, number, string];
// 1.必须按顺序
// tuple = [12, 'aaaa'];
// 2.必须含有所有类型
// tuple = ['aaa'];
// 3.且个数必须一致
// tuple = ['aaaa', 12];
// 4.可对单个赋值
tuple[0] = 'ccc';
// 正确赋值
tuple = ['aaa', 12, 'bbb'];
// 越界元素必须包含在元祖类型当中
tuple.push('aaa');

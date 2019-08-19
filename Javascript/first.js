
// console.log("BYE BYE");


// 字符串字面量

// console.log("hello\nworld");
// console.log("\"北京\"是中国的首都");
// console.log("'北京'是中国的首都");
// console.log('"北京"是中国的首都');


// 变量的定义和赋值  变量初始化
// 变量命名规则： 1. 以 _ $ 字母 开头 + _ $ 字母 数字
//              2.  不能是 js 的关键字或者保留字
//              3.  遵循语义化 ,遵循驼峰命名规则

// 定义但不赋值
var a;
console.log(a); // undefined 是 js 五种基本数据类型的一种

// 赋值但不定义 (变量定义/声明提升)
b = 100;
console.log(b); // 100

var c = 200,d = 250,e = 300; // 变量的初始化

// var d = 250;

// var e = 300;


// console.log(f);

var n = 100;
var s = "hello";
var b = true;
var u;
var nu = null;
// console.log(typeof n,typeof s,typeof b,typeof u,typeof nu);


var str1 = "hello";
var str2 = "world";
var total = str1 + str2;
// console.log(total);

// number + string = string
var num1 = 100;
// console.log(typeof (num1 + str1));


// var pureNumStr = "123455";
// var unPureNumStr = "adhsadhashd1234";
// console.log(parseInt(pureNumStr));
// console.log(parseInt(unPureNumStr));

// prompt 让用户输入内容的方法，执行完的结果是一个字符串
// parseInt 把字符串类型的数据转化成数字类型，纯数字转化成数字，非纯数字转化成 NaN
// isNaN 判断是不是 NaN
var userInput1 = parseInt(prompt("请输入一个数字"));
var userInput2 = parseInt(prompt("请输入另一个数字"));
if(isNaN(userInput1) === false){
    if (isNaN(userInput2) === false) {
        console.log("两次输入的数字加和是" + (userInput1 + userInput2));
    }
}

// 简写
// if (!isNaN(userInput1) && !isNaN(userInput2)) {
//     console.log("两次输入的数字加和是" + (userInput1 + userInput2));
// }

// 作业： 用户输入三个数，前两个相加减去第三个 ， 都需要判断用户输入是不是纯数字，都是纯数字正常计算，并把结果打印在控制台；不满足的不计算不打印






var str1 = "123";
var str2 = "344.12";
var str3 = "123abcd";
var str4 = "abcd";
var str5 = "a12cd4";

// console.log(parseInt(str1));
// console.log(parseInt(str2));
// console.log(parseInt(str3));
// console.log(parseInt(str4));
// console.log(parseInt(str5));


var num1 = 123;
// console.log(num1 + "");

// 强制类型转换
// console.log(String(num1));
// console.log(Number(str1));

// var n = 2 + Math.pow(3,6);
// var res = Math.pow(3,n);
var res = Math.pow(3, (2 + Math.pow(3, 6)));
// console.log(res);


var userInput = parseInt(prompt("请输入六边形边长"));
var s = 0;

// isNaN(userInput) === false
if(!isNaN(userInput)){
    s = 3 * Math.sqrt(3) / 2 * Math.pow(userInput,2);
    console.log("这个六边形的面积是" + s);
}
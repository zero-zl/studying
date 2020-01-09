"use strict";
//算术运算符（+，-，*，/，%，++，--）
var num1 = 10;
var num2 = 2;
var res = 0;
res = num1 + num2;
console.log("加:        " + res);
res = num1 - num2;
console.log("减: " + res);
res = num1 * num2;
console.log("乘:    " + res);
res = num1 / num2;
console.log("除:   " + res);
res = num1 % num2;
console.log("余数:   " + res);
num1++;
console.log("num1 自增运算: " + num1);
num2--;
console.log("num2 自减运算: " + num2);
//关系运算符（==,!=,>,<,>=,<=）
var num1 = 5;
var num2 = 9;
console.log("num1 的值为: " + num1);
console.log("num2 的值为:" + num2);
var res2 = num1 > num2;
console.log("num1 大于n num2: " + res2);
res2 = num1 < num2;
console.log("num1 小于 num2: " + res2);
res2 = num1 >= num2;
console.log("num1 大于或等于  num2: " + res2);
res2 = num1 <= num2;
console.log("num1 小于或等于 num2: " + res2);
res2 = num1 == num2;
console.log("num1 等于 num2: " + res2);
res2 = num1 != num2;
console.log("num1 不等于 num2: " + res2);
//逻辑运算符（&&，||，！）
var avg = 20;
var percentage = 90;
console.log("avg 值为: " + avg + " ,percentage 值为: " + percentage);
var res3 = ((avg > 50) && (percentage > 80));
console.log("(avg>50)&&(percentage>80): ", res3);
var res3 = ((avg > 50) || (percentage > 80));
console.log("(avg>50)||(percentage>80): ", res3);
var res3 = !((avg > 50) && (percentage > 80));
console.log("!((avg>50)&&(percentage>80)): ", res3);
//位运算符（&,|,~,^,<<,>>,>>>）
var a = 2; // 二进制 10 
var b = 3; // 二进制 11
var result;
result = (a & b);
console.log("(a & b) => ", result);
result = (a | b);
console.log("(a | b) => ", result);
result = (a ^ b);
console.log("(a ^ b) => ", result);
result = (~b);
console.log("(~b) => ", result);
result = (a << b);
console.log("(a << b) => ", result);
result = (a >> b);
console.log("(a >> b) => ", result);
result = (a >>> 1);
console.log("(a >>> 1) => ", result);
//赋值运算符（=,+=,-=,*=,/=）
var a = 12;
var b = 10;
a = b;
console.log("a = b: " + a);
a += b;
console.log("a+=b: " + a);
a -= b;
console.log("a-=b: " + a);
a *= b;
console.log("a*=b: " + a);
a /= b;
console.log("a/=b: " + a);
a %= b;
console.log("a%=b: " + a);
//三元运算符（Test?exp1:exp2）
var num = -2;
var result2 = num > 0 ? "大于 0" : "小于 0，或等于 0";
console.log(result2);
//类运算符（typeof）
var num = 12;
console.log(typeof num); //输出结果: number
//字符串运算符: 连接运算符 (+)字符串会时右边的数字和左边的运算结果变为字符串，对左边的操作不会影响
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + "2" + 3);
console.log(1 + 2 + "3");
console.log(1 + 2 + "3" + 4 + 5);
console.log("1" + 2 + 3 + 4);
console.log(1 + "2" + 3 + 4);
//# sourceMappingURL=opTs.js.map
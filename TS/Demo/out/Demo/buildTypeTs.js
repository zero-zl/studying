"use strict";
//1)Boolean
var isDone = false;
//2)Number
var decimal = 6; //10
var hex = 0xf00d; //16
var binary = 10; //2 ECMAScript 2015
var octal = 484; //8 ECMAScript 2015
//3)String("" or '')(``可以嵌入操作${expr}) 
var color = "blue";
color = 'red';
//string have var(${{expr}})
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
//(等价于)
//let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
//    "I'll be " + (age + 1) + " years old next month.";
//4)Array
var list = [1, 2, 3];
//等价于 let list:Array<Number>=[1,2,3];
//5)Tuple（元组）可以有不同的数据类型
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
//6)Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
var colorName = Color3[2];
console.log(colorName); // Displays 'Green' as its value is 2 above
//7)Any（可以改变为任意类型，可以一直在变）
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var list2 = [1, true, "free"];
list2[1] = 100;
//8)Void（没有类型）
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
//unusable = null; // OK if `--strictNullChecks` is not given
//9)Null and Undefined
// Not much else we can assign to these variables!
var u = undefined;
var n = null;
create({ prop: 0 }); // OK
create(null); // OK
//create(42); // Error
//create("string"); // Error
//create(false); // Error
//create(undefined); // Error
//11)TypeAssertions（类型推断）
var someValue = "this is a string";
var strLength = someValue.length;
var someValue2 = "this is a string";
var strLength2 = someValue.length;
//12)Never（不会出现的类型）
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//# sourceMappingURL=buildTypeTs.js.map
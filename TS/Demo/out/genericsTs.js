"use strict";
//Generics范型（在你编译后就确定定类型了，不可在之后更改）
function identity(arg) {
    return arg;
}
/*
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
*/
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
//# sourceMappingURL=genericsTs.js.map
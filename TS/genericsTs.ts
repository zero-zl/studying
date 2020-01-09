//Generics范型（在你编译后就确定定类型了，不可在之后更改）
function identity<T>(arg: T): T {
    return arg;
}
/*
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
*/
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
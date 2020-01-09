//1)Boolean
let isDone:boolean=false;
//2)Number
let decimal:number=6;//10
let hex:number=0xf00d;//16
let binary:number=0b1010;//2 ECMAScript 2015
let octal:number=0o744;//8 ECMAScript 2015

//3)String("" or '')(``可以嵌入操作${expr}) 
let color:string="blue";
color='red';
//string have var(${{expr}})
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

//(等价于)
//let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
//    "I'll be " + (age + 1) + " years old next month.";

//4)Array
let list:Number[]=[1,2,3];

//等价于 let list:Array<Number>=[1,2,3];

//5)Tuple（元组）可以有不同的数据类型
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

//6)Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green;

enum Color3 {Red = 1, Green, Blue}
let colorName: string = Color3[2];

console.log(colorName); // Displays 'Green' as its value is 2 above
//7)Any（可以改变为任意类型，可以一直在变）
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let list2: any[] = [1, true, "free"];

list2[1] = 100;

//8)Void（没有类型）
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;
//unusable = null; // OK if `--strictNullChecks` is not given

//9)Null and Undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
//10)Object
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

//create(42); // Error
//create("string"); // Error
//create(false); // Error
//create(undefined); // Error

//11)TypeAssertions（类型推断）
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let someValue2: any = "this is a string";

let strLength2: number = (someValue as string).length;

//12)Never（不会出现的类型）
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
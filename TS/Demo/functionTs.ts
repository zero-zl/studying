//不定义类型函数
// Named function
//function add(x, y) {
//    return x + y;
//}
//
//// Anonymous function
//let myAdd = function(x, y) { return x + y; };
//定义类型函数
function add2(x: number, y: number): number {
    return x + y;
}

let myAdd2 = function(x: number, y: number): number { return x + y; };
//可选参数（a?:string）a可以是string也可以不是
//默认参数（a，b=1）从右到左
//剩余参数（a,...）a后可以有任意个参数

//构造函数
//支持var res = new Function( [arguments] ) { ... })
var myFunction = new Function("a", "b", "return a * b"); 
var x2 = myFunction(4, 3); 
console.log(x2);

//匿名函数var res = function( [arguments] ) { ... }
var msg = function() { 
    return "hello world";  
} 
console.log(msg())

//lambda（箭头）函数
//( [param1, parma2,…param n] )=>statement;
var foo = (x:number)=>10 + x 
console.log(foo(100));    //输出结果为 110

//函数自调用（匿名函数自调用在函数后使用 (））
(function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()

//函数重载（重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

//每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。）
//1.类型不同
//function disp(string):void; 
//function disp(number):void;
////参数数量不同
//function disp1(n1:number):void; 
//function disp1(x:number,y:number):void;
////参数类型顺序不同
//function disp2(n1:number,s1:string):void; 
//function disp2(s:string,n:number):void;
//


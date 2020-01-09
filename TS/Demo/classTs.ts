//类
/**
 * class class_name { 
    // 类作用域
}
readonly:属性只可读
const：常量
 */
//继承class child_class_name extends parent_class_name（单继承，但可以多重继承）
//子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承
class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
  
 class Circle extends Shape { 
    disp():void { 
       console.log("圆的面积:  "+this.Area) 
    } 
 }
   
 var obj = new Circle(223); 
 obj.disp()



 class Root { 
   // str:string; 
 } 
  
 class Child extends Root {} 
 class Leaf extends Child {} // 多重继承，继承了 Child 和 Root 类
  
 var obj1 = new Leaf(); 
// obj1.str ="hello" 
 //console.log(obj1.str)
//重写（类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写）
class PrinterClass { 
    doPrint():void {
       console.log("父类的 doPrint() 方法。") 
    } 
 } 
  
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() // 调用父类的函数
       console.log("子类的 doPrint()方法。")
    } 
 }
//instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。

//访问控制修饰符
/**
 * public（默认） : 公有，可以在任何地方被访问。

protected : 受保护，可以被其自身以及其子类和父类访问。

private : 私有，只能被其定义所在的类访问。
 */
//static(static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。)
void main(){
Animal dog=new Animal.a("Dog");
Animal dog2=new Dog();
dog.play();
dog2.play();
}
/**
 * class class_name {  
   <fields>
   <getters/setters>
   <constructors>
   <functions>
}
 * 
 */
/**
 * 构造器：Class_name(parameter_list) {
   //constructor body
}当要多个构造器时要用命名的构造函数
Class_name.constructor_name(param_list)

 * 
 */
class Animal{
String name;

Animal();
Animal.a(this.name);//构造可以这样写
play(){
  print("i'm a Animal");
}
}
class Dog extends Animal{
@override
  play() {
    // TODO: implement play
     //super.play();
    print("wang wang");
  }
}
/**
 * set get
 * getter和setter方法，也称为存取和存取器，允许该程序初始化并分别检索类字段的值。
 * 使用get关键字定义getter或访问器。
 * Setter或mutator是使用set关键字定义的。
 *默认的getter / setter与每个类相关联。但是，可以通过显式定义setter / getter来覆盖默认值。
 getter没有参数并返回一个值，setter有一个参数并且不返回值。
 *语法：定义一个getter

Return_type  get identifier
{
}

语法：定义一个setter

set identifier
{
}
 * 
 */
class Student {
   String name;
   int age;

   String get stud_name {
      return name;
   }

   void set stud_name(String name) {
      this.name = name;
   }

   void set stud_age(int age) {
      if(age<= 0) {
        print("Age should be greater than 5");
      }  else {
         this.age = age;
      }
   }

   int get stud_age {
      return age;     
   }
}  
//super关键字用来指一类的直接父类。关键字可用于引用变量，属性或方法的超类。
class Parent {
   String msg = "message variable from the parent class";
   void m1(int a){ print("value of a ${a}");}
}
class Child extends Parent {
   @override
   void m1(int b) {
      print("value of b ${b}");
      super.m1(13);
      print("${super.msg}")   ;
   }
}

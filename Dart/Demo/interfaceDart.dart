//every class every interface
//一个接口定义任何实体必须遵守的语法。接口定义了一组对象可用的方法。
void main(){
   ConsolePrinter cp= new ConsolePrinter();
   cp.print_data();
}  
class Printer {
   void print_data() {
     print("__________Printing Data__________");
  }
}  
class ConsolePrinter implements Printer {
   void print_data() {  
      print("__________Printing to Console__________");
   }
}
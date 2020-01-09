void main(){
print(factorial(3));
printMsg();
print(test());
play();
play1(1);
}

//function(返回值，参数要求写类型，但不写也不会影响执行)
/** <return value Type> functionName(elem list){
 * function body
 * }
 */
//递归
factorial(number) {
   if (number <= 0) {         
      // termination case
      return 1;
   } else {
      return (number * factorial(number - 1));    
      // function invokes itself
   }
}

//lambda function箭头
//[return_type]function_name(parameters)=>expression;
printMsg()=>print("lambada function");
int test()=>123;//(123为返回的东西)
//Use optional parameters (instead of overloading)
play(){
  print("1");
}
play1(num){
  print(num);
}
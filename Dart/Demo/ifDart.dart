void main(){
//if
  var  num=5;
 if (num>0) {
    print("number is positive");
 }    
 //if else
 var num1 = 12;
   if (num1 % 2==0) {
      print("Even");
   } else {
      print("Odd");
   }

//if else if
var num2 = 2;
   if(num2 > 0) {
      print("${num2} is positive");
   }
   else if(num2 < 0) {
      print("${num2} is negative");
   } else {
      print("${num2} is neither positive nor negative");
   }

//switch
var grade = "A";
 switch(grade) {
    case "A": {  print("Excellent"); }
    break;

    case "B": {  print("Good"); }
    break;

    case "C": {  print("Fair"); }
    break;

    case "D": {  print("Poor"); }
    break;

    default: { print("Invalid choice"); }
    break;
 }
}
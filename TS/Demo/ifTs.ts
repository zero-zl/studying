//if
/**
 * if(boolean_expression){
    # 在布尔表达式 boolean_expression 为 true 执行
}
 */

var  num:number = 5
if (num > 0) { 
   console.log("数字是正数") 
}

//if...else
/**
 * if(boolean_expression){
   # 在布尔表达式 boolean_expression 为 true 执行
}else{
   # 在布尔表达式 boolean_expression 为 false 执行
}
 */
var num:number = 12; 
if (num % 2==0) { 
    console.log("偶数"); 
} else {
    console.log("奇数"); 
}
//if...else if...else
/**
 * if(boolean_expression 1){
    # 在布尔表达式 boolean_expression 1 为 true 执行
}
else if( boolean_expression 2){
    # 在布尔表达式 boolean_expression 2 为 true 执行
}
else if(( boolean_expression 3){
    # 在布尔表达式 boolean_expression 3 为 true 执行
}
else{
    # 布尔表达式的条件都为 false 时执行
}
 */
var num:number = 2 
if(num > 0) { 
    console.log(num+" 是正数") 
} else if(num < 0) { 
    console.log(num+" 是负数") 
} else { 
    console.log(num+" 不是正数也不是负数") 
}
//switch (必须是一个常量或字面量)
/**
 * switch(expression){
    case constant-expression  :
       statement(s);
       break; //可选的 
       case constant-expression  :
        statement(s);
        break; // 可选的 
   
     // 您可以有任意数量的 case 语句 
     default : // 可选的 
        statement(s);
 }
 */
var grade:string = "A"; 
switch(grade) { 
    case "A": { 
        console.log("优"); 
        break; 
    } 
    case "B": { 
        console.log("良"); 
        break; 
    } 
    case "C": {
        console.log("及格"); 
        break;    
    } 
    case "D": { 
        console.log("不及格"); 
        break; 
    }  
    default: { 
        console.log("非法输入"); 
        break;              
    } 
}
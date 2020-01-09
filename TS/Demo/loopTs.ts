let ndemo:Number[]=[1,2,3];
//for
/**
 * for ( init; condition; increment ){
    statement(s);
}
 */
for(let i=0;i<ndemo.length;i++){
    console.log("for="+ndemo[i]);
}
//for...in(key)
for (let j in ndemo){
console.log("for...in="+ndemo[j]);
}
//for...of(value)
for (let j in ndemo){
    console.log("for ..of="+j);
    }
//forEach
ndemo.forEach((val,idx,array)=>{
    //val: now value
    //idx:now index
    //array now array
    console.log("forRach ="+`val:${val}`+`idx:${idx}`+`array:${array}`);
});
//every
ndemo.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log("every ="+`val:${val}`+`idx:${idx}`+`array:${array}`);
    return true; // Continues
    // Return false will quit the iteration
})
//while
let a1=0;

while(a1<3){
    console.log("while="+ndemo[a1]);
    a1++;
}
//do..while
let a2=0;
do{
    console.log("do...while="+ndemo[a2]);
    a2++;
}
while(a2<3);
 
//break(跳出函数)
//continue（跳出此次循环进行下一次循环判断）
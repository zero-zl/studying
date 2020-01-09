void main(){
var list=[3,2,1];
//for
for (int i=0;i<list.length;i++)//迭代数字
{
  
  print("${i}=${list[i]}");
}
//for-in
for(var i in list){//迭代值
  print(i);
}
//while(${var})
int a=0;
while(a<list.length){
print("while${a}=${list[a]}");
a++;
}
//do while
int b=0;
do{
  print("do-While${b}=${list[b]}");
  b++;
}
while(b<list.length);

//break
for (int i=0;i<list.length;i++)//迭代数字
{
  if(i==0)continue;
  print("continue${i}=${list[i]}");
}
//continue
for (int i=0;i<list.length;i++)//迭代数字
{
  if(i==1)break;
  print("break${i}=${list[i]}");
}

}
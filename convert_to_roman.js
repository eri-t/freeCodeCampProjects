function convertToRoman(num) {
let str='';
let num2=0,rest=0;

if(num>=1000){
  rest=num%1000;
  num2=parseInt(num/1000); 
  for(let i=0; i<num2; i++){
    str+='M';
  }
}else{
  rest=num;
}
let num3=parseInt(rest/100);
rest=rest%100;
switch(num3){
  case 9: str+='CM';
  break;
  case 8: str+='DCCC';
  break;
  case 7: str+='DCC';
  break;
  case 6: str+='DC';
  break;
  case 5: str+='D';
  break;
  case 4: str+='CD';
  break;
  case 3: str+='CCC';
  break;
  case 2: str+='CC';
  break;
  case 1: str+='C';
  break;
}

let num4=parseInt(rest/10);
rest=rest%10;
switch(num4){
  case 9: str+='XC';
  break;
  case 8: str+='LXXX';
  break;
  case 7: str+='LXX';
  break;
  case 6: str+='LX';
  break;
  case 5: str+='L';
  break;
  case 4: str+='XL';
  break;
  case 3: str+='XXX';
  break;
  case 2: str+='XX';
  break;
  case 1: str+='X';
  break;
}

switch(rest){
  case 9: str+='IX';
  break;
  case 8: str+='VIII';
  break;
  case 7: str+='VII';
  break;
  case 6: str+='VI';
  break;
  case 5: str+='V';
  break;
  case 4: str+='IV';
  break;
  case 3: str+='III';
  break;
  case 2: str+='II';
  break;
  case 1: str+='I';
  break;
}

console.log(num2,num3,num4,rest,str);
 return str;
}

convertToRoman(36);
const currency=[["PENNY", .01], ["NICKEL", .05], ["DIME", .1], ["QUARTER", .25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];

function checkCashRegister(price, cash, cid) {
  var change=cash-price;
  let result={
    status:'',
    change:[],
  };
let n=0;
for(let i=0; i<currency.length; i++) {
  if(change>=currency[i][1]){
    n=i;
  }
}
let sum=0;
for(let i=0; i<n; i++) {
  sum+=cid[i][1];
}

if(sum>change){
  result.status='OPEN';
  let m,
    rest=change,
    i=n,
    total=0,
    print=0;

  do{
    let subrest=0;
    m = parseInt(rest/currency[i][1]);//number of coins or bills
    total=currency[i][1]*m;
    if(total<=cid[i][1]){
      print=currency[i][1]*m;    
    }else{
      print=cid[i][1];
      subrest=total-cid[i][1];
    }
    rest = subrest + rest%currency[i][1];
    if(m!=0){
      result.change.push([cid[i][0],print]);
    }
    if(i==1 ){
      rest=rest.toFixed(2);
      if(rest!=0){
        print=parseFloat(rest);
        result.change.push([cid[0][0],print]);
      }   
    }
    i--;
  }while(i>0)
  
}else if(sum==change){
  result.status='CLOSED';
  result.change=cid;
}else{
  result.status='INSUFFICIENT_FUNDS';
}
  console.log('change: '+change, result,currency[n][1],sum);
  return result;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
How to create a Range function:
function fRange(Start, end){ 
  myArr.length = 0;    
    for(var i=start;i<=end;i++){     
      myArr.push(i);    
    }    
  return myArr;
}

var sum = 0;
function fsum(Arr){
  for(i=0;i<Arr.length; i++){
    sum = sum+Arr[i];
  }
  return sum;
}

fsum(fRange(1,10)); //55

function fStepRange(Start, end, Step)
{
  myArr.length = 0;
  if (!isNaN(Step))
    for(var i=start;i<=end;i+step){
      myArr.push(i);
    }
  else
    for(var i=start;i<=end;i++){
      myArr.push(i);
    }
  return myArr;
}

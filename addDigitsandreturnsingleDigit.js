
var addDigits = function(num){
    let arr = num.toString().split("");
    let final = loopMyArrAgain(arr)
    if(final >= 10){
       final = loopMyArrAgain(final.toString().split(""))
    }
    return final;
  }
  
  var loopMyArrAgain = function(arr){
    let total = 0;
    for(let i=0; i<arr.length; i++)
    {
      total += Number(arr[i]);
    }
    return total;
  }
  
  console.log(addDigits(38))
  console.log(addDigits(940))
  console.log(addDigits(15))
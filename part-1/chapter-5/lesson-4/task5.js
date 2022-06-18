function getMaxSubSum(arr){
    let sum = 0;
    let subSum = 0;
    
    for (let i=0; i<arr.length; i++){
      subSum += arr[i]
      sum = Math.max(sum, subSum);
      if (subSum < 0){
          subSum = 0;
      }
    }
    return sum
  }
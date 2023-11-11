// Q1> Second larget number
// Input: [12, 35, 1, 10, 34, 1]
// Input: [10, 5, 10]

// var secondLargest = function(arr){
//     const uniqueArr = Array.from(new Set(arr))
//     uniqueArr.sort((a,b) => b-a);
//     return uniqueArr.length >=2 ? uniqueArr[1] : -1
// }

var secondLargestOptimized = function(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    for(let i=0; i < arr.length; i++){
        if(arr[i]> largest){
            secondLargest = largest;
            largest = arr[i]        
        }else if(arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(secondLargestOptimized([12, 35, 1, 10, 34, 1]))
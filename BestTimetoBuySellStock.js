// Best Time to Buy and sell stocks

// Input: Prices = [7, 1, 5, 3, 6, 4] ===> Output: 5
// Input: Prices = [7, 6, 4, 3, 1] ===> Output: 0

// Solution 1:

// function maxProfit(prices){
//     let globalProfit = 0;
//     for(let i=0; i< prices.length-1; i++){
//         for(let j=i+1; j<prices.length; j++){
//             const currentProfit = prices[j] - prices[i]

//             if(currentProfit > globalProfit){
//                 globalProfit = currentProfit
//             }
//         }
//     }
//     return globalProfit
// }

// console.log(maxProfit([7, 6, 4, 3, 1]))

// Implementing Greedy Algorithm

function maxProfit(prices) {
    let min = prices[0] || 0;
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i]

        profit = Math.max(profit, prices[i] - min)
    }
    return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

// min    ==> 7 => 1 
// profit ==> 


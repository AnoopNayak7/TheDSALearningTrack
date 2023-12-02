var deleteDuplicates = function(head) {
    let finalArr = []
    for(let i =0; i<head.length; i++){
        if(!finalArr.includes(head[i])){
            finalArr.push(head[i])
        }
    }
    return finalArr;
};

console.log(deleteDuplicates([1,1,2]))
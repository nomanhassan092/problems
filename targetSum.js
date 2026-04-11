// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

const targetSum = (arr = [10, 15, 3, 7], sum = 19) => {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === sum) {
                return true
            }
        }
    }

    return false
}

const targetSumOnePass = (arr = [10, 15, 3, 7], sum = 17) => {
    const seen = new Set()
    for(item of arr){
        if(seen.has(sum - item)){
            return true
        } else {
            seen.add(item)
        }
    }
    return false;
}

console.log(targetSum())
console.log(targetSumOnePass())
// Given an array of integers, find the first missing positive integer in linear time and constant space. 
// In other words, find the lowest positive integer that does not exist in the array. 
// The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

const findMissingPositiveInteger = (arr = [3, 4, -1, 1]) => {
    const n = arr.length;

    // Step 1: replace irrelevant values (<=0 or >n) with n+1
    // We only care about integers in the range [1..n]
    for (let i = 0; i < n; i++) {
        if (arr[i] <= 0 || arr[i] > n) {
            arr[i] = n + 1;
        }
    }

    console.log("after negating irrelevant values: ", arr)

    // Step 2: for each value v in range [1..n], mark arr[v-1] as negative
    // A negative value at index i means (i+1) has been seen
    for (let i = 0; i < n; i++) {
        const v = Math.abs(arr[i]); // use abs because it may already be negated
        if (v <= n) {
            arr[v - 1] = -Math.abs(arr[v - 1]); // negate without double-negating
        }
    }

    console.log("after marking seen values", arr)

    // Step 3: first index with a positive value = that integer was never seen
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) return i + 1;
    }


    // all integers 1..n were present, so the answer is n+1
    return n + 1;
}

console.log(findMissingPositiveInteger([3, 4, -1, 1])) // 2
// console.log(findMissingPositiveInteger([1, 2, 0]))      // 3
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?


//O(n) with division
const productOfElementsExcepti = (arr = [3, 2, 1]) => {
    const product = arr.reduce((acc, item) => { return acc * item }, 1)
    return arr.map(item => product / item)
}


//brute force O(n2)
const productOfElementsExceptI = (arr = [3, 2, 1]) => {
    let r = []//new Array(arr.length).fill(1) //.fill(0, 0, arr.length)
    console.log("R IS: ", r)
    for (let i = 0; i < arr.length; i++) {
        let product = 1
        console.log("product initialized to: ", product)
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                product = product * arr[j]
            }
        }
        // r[i] = product
        r.push(product)
    }

    return r
}


// O(n) no division - prefix/suffix product

const productNoDiv = (arr = [1, 2, 3, 4, 5]) => {
    const n = arr.length
    const result = new Array(n).fill(1)

    let productFromLeft = 1

    for (let i = 1; i < n; i++) {
        productFromLeft = productFromLeft * arr[i-1]
        result[i] = productFromLeft
    }

    let productFromRight = 1
    for(let i = n - 1; i >=0; i--){
        result[i] = result[i] * productFromRight
        productFromRight = arr[i] * productFromRight
    }

    return result
}


console.log("PRODUCT NO DIV: ", productNoDiv())
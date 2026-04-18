// This problem was asked by Jane Street.

// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:

// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
// Implement car and cdr


const cons = (a,b) => (f) => f(a,b)
const car = (pair) => pair((a,b) => a)
const cdr = (pair) => pair((a,b) => b)


const pair = cons(1,2)
const car_val = car(pair)
const cdr_val = cdr(pair)

console.log({ pair, car_val, cdr_val })
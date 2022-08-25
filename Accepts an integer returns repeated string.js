// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"
// https://losseff.xyz/katas/006-string-repeat/javascript/
function repeatStr (n, s) {
    let newString = []
    for(let i = 0; i < n; i++) {
        newString.push(s)
    }
    return newString.join('')
}
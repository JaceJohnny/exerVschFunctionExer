// Write a function that accepts two numbers as parameters, and returns the sum
function sum (num1, num2){
    return num1 + num2
}
console.log("answer to 2 +3")
console.log(sum(2, 3))
console.log("answer to 2030 + 79")
console.log(sum(2030, 79))

//Write a function that accepts three numbers as a parameter, and returns the largest of those numbers
function max (num1, num2, num3){
    if (num1 > num2 && num1 > num3)
    return (num1)
    else{
        if (num1 < num2 && num1 > num3)
        return (num2)
        else{
            if (num1 < num2 && num1 <num3)
            return (num3)
        }
    }
}

console.log("answer for largest: 2,3,4")
console.log(max (2,3,4))
console.log("answer for largest: 17, 12, 10")
console.log(max (17, 12, 10))

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd
function OddOrEven (number){
    if(number % 2 === 0)
        return (number, "Input is an even number")
        else{
            if (number % 2 !== 0)
            return (number, "Input is an odd number")
        }
}
console.log("answer for the number 2")
console.log(OddOrEven(2))
console.log("answer for the number 3")
console.log(OddOrEven(3))



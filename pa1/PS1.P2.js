/*
Write a function that takes as its input a formatted string, such as these:
‘4+2’
‘5*7’
‘6-1’
‘9/2’
‘2^8’ (where ^ is exponentiation)

This function should
Determine the operator (+, *, -, ^, or /) embedded in the string
Return a function to implement the input operator that returns the result
 */

const evaluate = expression => {
    // parse expression to get the 2 digits and the operator
    const d1 = parseInt(expression.slice(0, 1));
    const operator = expression.slice(1, 2);
    const d2 = parseInt(expression.slice(2, 3));

    // define functions for each operator
    const add = () => d1 + d2;
    const mul = () => d1 * d2;
    const sub = () => d1 - d2;
    const div = () => d1 / d2;
    const pow = () => d1 ** d2;
    const err = () => null; // return null if operator unidentifiable

    let operatorFunc;
    // check operator to return correct operator function
    if (operator === "+") {
        operatorFunc = add;
    } else if (operator === "*") {
        operatorFunc = mul;
    } else if (operator === "-") {
        operatorFunc = sub;
    } else if (operator === "/") {
        operatorFunc = div;
    } else if (operator === "^") {
        operatorFunc = pow;
    } else {
        operatorFunc = err;
    }
    return operatorFunc;
}

const expression = '8+3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

module.exports = {evaluate};
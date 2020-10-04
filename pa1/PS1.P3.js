/*
Write a function that accepts two input parameters: a string, and a decorator function. The
function should execute the passed decorator function on the passed string and return the
result.
 */
const func = (s, decFunc) => decFunc(s);

/*
Next, write two expressions that call this function. For the first, pass the string
‘supercalifragilisticexpialidocious’ and a lambda (unnamed) function that returns an array
containing fragments of the input string broken on the character ‘c’. For the input string
‘supercalifragilisticexpialidocious’, you should get
[‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]
 */
let testString = 'supercalifragilisticexpialidocious';
let expression1 = func(testString, (s) => s.replace(/c/gi,',c').split(','));
console.log(expression1);

/*
For the second expression, pass the string ‘supercalifragilisticexpialidocious’ and a lambda
function that replaces all of the ‘a’ characters with ‘A’ characters. Return an object that
contains the original string, the modified string, the total number of As in the modified string,
and the overall length of the modified string:
 */

function replaceA(originalString, modifiedString, numberReplaced, length) {
    this.originalString = originalString;
    this.modifiedString = modifiedString;
    this.numberReplaced = numberReplaced;
    this.length = length;
}

let expression2 = new replaceA(testString, func(testString, (s) => s.replace(/a/g, 'A')),
    (testString.match(/a/g) || []).length, testString.length);
console.table(expression2);

module.exports = {func, expression1, replaceA, expression2};

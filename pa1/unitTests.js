// PS1.P1.js Unit Tests
const {reverseAlpha} = require('./PS1.P1');

const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('PS1.P1 tests', () => {
    it('should return xuutsssrrppoollliiiiiiigfeedcccaaa', () => {
        let testString = 'supercalifragilisticexpialidocious';
        let reverseString = 'xuutsssrrppoollliiiiiiigfeedcccaaa';
        expect(reverseString).equal(reverseAlpha(testString));
        console.log(`${testString} in reverse alphabetical order is: ${reverseAlpha(testString)}`);
    });
    it('should return yurrpmkiiaa', () => {
        let testString = 'priyakumari';
        let reverseString = 'yurrpmkiiaa';
        expect(reverseString).equal(reverseAlpha(testString));
        console.log(`${testString} in reverse alphabetical order is: ${reverseAlpha(testString)}`);
    });
    it('should return vtsrpjicaa', () => {
        let testString = 'javascript';
        let reverseString = 'vtsrpjicaa';
        expect(reverseString).equal(reverseAlpha(testString));
        console.log(`${testString} in reverse alphabetical order is: ${reverseAlpha(testString)}`);
    });
    it('should return edcba', () => {
        let testString = 'edcba';
        let reverseString = 'edcba';
        expect(reverseString).equal(reverseAlpha(testString));
        console.log(`${testString} in reverse alphabetical order is: ${reverseAlpha(testString)}`);
    })
    }
)

// PS1.P2.js Unit Tests
const {evaluate} = require('./PS1.P2');

describe('PS1.P2 tests', () => {
    it('should return 6', () => {
        let sum = evaluate('4+2')();
        expect(sum).equal(6);
    });
    it('should return 35', () => {
        let prod = evaluate('5*7')();
        expect(prod).equal(35);
    });
    it('should return 5', () => {
        let diff = evaluate('6-1')();
        expect(diff).equal(5);
    });
    it('should return 4.5', () => {
        let quotient = evaluate('9/2')();
        expect(quotient).equal(4.5);
    });
    it('should return 256', () => {
        let expo = evaluate('2^8')();
        expect(expo).equal(256);
    });
    it('should return null', () => {
        let num = evaluate('8x3')();
        expect(num).equal(null);
    })
    it('should return a Number type', () => {
        let sum = evaluate('4+2');
        expect(sum).to.not.be.NaN;
    });
})

// PS1.P3.js Unit Tests
const {func, expression1, replaceA, expression2} = require('./PS1.P3');
describe('PS1.P3 tests', () => {
    it('should return ["super", "califragilisti", "cexpialido", "cious"]', () => {
        let testString = 'supercalifragilisticexpialidocious';
        let result = ["super", "califragilisti", "cexpialido", "cious"];
        expect(result).to.eql(expression1);
    });
    it('should return ["a", "c", "compli", "ce"]', () => {
        let testString = 'accomplice';
        let result = ["a", "c", "compli", "ce"];
        expect(result).to.eql(func(testString, (s) => s.replace(/c/gi,',c').split(',')));
    });
    it('should return supercAlifrAgilisticexpiAlidocious', () => {
        let testString = 'supercalifragilisticexpialidocious'; // has 3 a's
        let result = 'supercAlifrAgilisticexpiAlidocious';
        expect(expression2.originalString).equal(testString);
        expect(expression2.modifiedString).equal(result);
        expect(expression2.numberReplaced).equal(3);
        expect(expression2.length).equal(34);
    });
    it('should return AbrAcAdAbrA', () => {
        let testString = 'Abracadabra'; // has 4 a's and 1 A
        let result = 'AbrAcAdAbrA';
        let replaced = new replaceA(testString, func(testString, (s) => s.replace(/a/gi, 'A')), (testString.match(/a/g) || []).length, testString.length);
        expect(replaced.originalString).equal(testString);
        expect(replaced.modifiedString).equal(result);
        expect(replaced.numberReplaced).equal(4);
        expect(replaced.length).equal(11);
    })
})

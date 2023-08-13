const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const obj = {'10': '.', '11': '-'}

function func(elem) {
    const obj = {'10': '.', '11': '-'}
    let result = '';
    let decod = '';
    let count = 0;
    
        for (let i = 0; i < elem.length; i+=2) {
            if (elem[i] + elem[i+1] == 0) {
            
                count++
                if(count % 5 == 0) {
                    result += ' '
                }
            } else {
                result += obj[elem[i] + elem[i+1]];
                
                count++
                if(count % 5 == 0) {
                    result += ' '  
                }
            }
        }
        return result
   }

function decode(expr) {
    // write your solution here
    let arr = expr.split('**********')
    let newArr = [];
    let finishLine = '';
        for (let elem of arr) {
            newArr.push(elem.split(''))
        }
   for (let elem of newArr) {
    let arraySymbol = func(elem).split(' ');
    for (let i = 0; i < arraySymbol.length; i++) {
        if (MORSE_TABLE[arraySymbol[i]]) {
           finishLine += MORSE_TABLE[arraySymbol[i]]
        } else {
            finishLine += ' '
        }
    }
   }
   return finishLine.slice(0, -1)
}

module.exports = {
    decode
}
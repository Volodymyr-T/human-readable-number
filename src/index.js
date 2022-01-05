module.exports = function toReadable (number) {
    const Ones = ['', 'one', 'two', 'three', 'four', 'five',
                  'six', 'seven', 'eight', 'nine', 'ten',
                  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
                  'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    const Tens = ['','','twenty', 'thirty', 'forty', 'fifty', 
                  'sixty', 'seventy', 'eighty', 'ninety'];
    
    const numArray = number.toString().split('');   // Create an Array of char
    const one = +numArray.pop() || 0;               // A number of ones
    const ten = +numArray.pop() || 0;               // A number of tens
    const hundred = +numArray.pop() || 0;           // A number of hundreds
    
    if (number === 0) return 'zero';                // A special case
    return `${
                hundred ? Ones[hundred] + ' hundred' : ''
            } ${
                (ten < 2) ? Ones[Number(''+ten+one)] : Tens[ten] + ' ' + Ones[one]
            }`.trim();
}


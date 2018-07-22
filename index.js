const converter = {};

converter.convertToRoman = function(num) {
    const lookup = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };
    let romanNum = [];

    for (let i = Object.keys(lookup).length; i >= 0; i--) {
        while (Object.keys(lookup)[i] <= num) {
            romanNum.push(Object.values(lookup)[i]);
            num -= Object.keys(lookup)[i];
        }
    }
    return romanNum.join('');
}

module.exports = converter;
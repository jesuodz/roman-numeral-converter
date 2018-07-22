const assert = require('assert');
const converter = require('./index.js');

describe('convertToRoman', () => {
    it('should return II', () => {
        assert.equal('II', converter.convertToRoman(2))
    })
    it('should return III', () => {
        assert.equal('III', converter.convertToRoman(3))
    })
    it('should return IV', () => {
        assert.equal('IV', converter.convertToRoman(4))
    })
    it('should return V', () => {
        assert.equal('V', converter.convertToRoman(5))
    })
    it('should return IX', () => {
        assert.equal('IX', converter.convertToRoman(9));
    })
    it('should return XII', () => {
        assert.equal('XII', converter.convertToRoman(12));
    })
    it('should return XVI', () => {
        assert.equal('XVI', converter.convertToRoman(16));
    })
    it('should return XXIX', () => {
        assert.equal('XXIX', converter.convertToRoman(29));
    })
    it('should return XLIV', () => {
        assert.equal('XLIV', converter.convertToRoman(44));
    })
    it('should return XLV', () => {
        assert.equal('XLV', converter.convertToRoman(45));
    })
    it('should return LXVIII', () => {
        assert.equal('LXVIII', converter.convertToRoman(68));
    })
    it('should return LXXXIII', () => {
        assert.equal('LXXXIII', converter.convertToRoman(83));
    })
    it('should return XCVII', () => {
        assert.equal('XCVII', converter.convertToRoman(97));
    })
    it('should return CD', () => {
        assert.equal('CD', converter.convertToRoman(400));
    })
    it('should return D', () => {
        assert.equal('D', converter.convertToRoman(500));
    })
    it('should return DI', () => {
        assert.equal('DI', converter.convertToRoman(501));
    })
    it('should return DCXLIX', () => {
        assert.equal('DCXLIX', converter.convertToRoman(649));
    })
    it('should return DCCXCVIII', () => {
        assert.equal('DCCXCVIII', converter.convertToRoman(798));
    })
    it('should return DCCCXCI', () => {
        assert.equal('DCCCXCI', converter.convertToRoman(891));
    })
    it('should return M', () => {
        assert.equal('M', converter.convertToRoman(1000));
    })
    it('should return MIV', () => {
        assert.equal('MIV', converter.convertToRoman(1004));
    })
    it('should return MVI', () => {
        assert.equal('MVI', converter.convertToRoman(1006));
    })
    it('should return MXXIII', () => {
        assert.equal('MXXIII', converter.convertToRoman(1023));
    })
    it('should return MMXIV', () => {
        assert.equal('MMXIV', converter.convertToRoman(2014));
    })
    it('should return MMMCMXCIX', () => {
        assert.equal('MMMCMXCIX', converter.convertToRoman(3999));
    })
})
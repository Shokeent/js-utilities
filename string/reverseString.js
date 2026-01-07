/**
 * Reverses the given string.
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
    if (typeof str !== 'string') return '';
    
    return str.split('').reverse().join('');
}
module.exports = reverseString;
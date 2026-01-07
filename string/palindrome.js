/**
 * Checks if a string is a palindrome.
 * @param {string} str - The string to be checked.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    if (typeof str !== 'string') return false;
    
   const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

module.exports = isPalindrome;
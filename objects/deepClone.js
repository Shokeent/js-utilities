/**
 * Deeply clones a given object.
 * @param {Object} obj - The object to be cloned.
 * @returns {Object} - The deeply cloned object.        
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }

  return cloned;
}

module.exports = deepClone;
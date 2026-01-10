/**
 * Creates a throttled function
 * @param {Function} fn
 * @param {number} limit
 * @returns {Function}
 */
function throttle(fn, limit = 300) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= limit) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

module.exports = throttle;

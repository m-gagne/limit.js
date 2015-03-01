/**
 * debounce
 * @param {integer} milliseconds This param indicates the number of milliseconds
 *     to wait after the last call before calling the original function.
 * @param {boolean} immediate Pass in true if the function should be called 
 *     immediately, false for normal behaviour.
 * @param {object} What "this" refers to in the returned function.
 * @return {function} This returns a function that when called will wait the
 *     indicated number of milliseconds after the last call before
 *     calling the original function.
 */
Function.prototype.debounce = function (milliseconds, immediate, context) {
    var baseFunction = this,
        timer = null;
        
    return function () {
        var self = context || this,
            args = arguments,
            invoke = immediate && !timer;

        function complete() {
            if (!immediate) {
                baseFunction.apply(self, args);
            }

            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(complete, milliseconds);

        if (invoke) {
            baseFunction.apply(self, args);
        }
    };
};

/**
* throttle
* @param {integer} milliseconds This param indicates the number of milliseconds
*     to wait between calls before calling the original function.
* @param {object} What "this" refers to in the returned function.
* @return {function} This returns a function that when called will wait the
*     indicated number of milliseconds between calls before
*     calling the original function.
*/
Function.prototype.throttle = function (milliseconds, context) {
    var baseFunction = this,
        lastEventTimestamp = null,
        limit = milliseconds;

    return function () {
        var self = context || this,
            args = arguments,
            now = Date.now();

        if (!lastEventTimestamp || now - lastEventTimestamp >= limit) {
            lastEventTimestamp = now;
            baseFunction.apply(self, args);
        }
    };
};
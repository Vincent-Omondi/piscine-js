const throttle = (func, wait) => {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= wait) {
            func.apply(this, args);
            lastCall = now;
        }
    };
}

function opThrottle(func, wait, options = {}) {
    let timeout = null;
    let previous = 0;
    let result;
    let lastArgs;
    let lastCallTime;

    return function throttled(...args) {
        const now = Date.now();
        lastArgs = args;

        if (!previous && options.leading === false) {
            previous = now;
        }

        const remaining = wait - (now - previous);

        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            lastCallTime = now;
            result = func.apply(this, lastArgs);
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(() => {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                lastCallTime = previous;
                result = func.apply(this, lastArgs);
            }, remaining);
        }

        // Handle trailing calls
        if (options.trailing && now - lastCallTime >= wait) {
            previous = now;
            lastCallTime = now;
            result = func.apply(this, lastArgs);
        }

        return result;
    };
}

// const throttleDisplay = throttle(() => console.log("Hi"), 6000);

// for(let i=1; i<=10; i++) {
//     setTimeout(throttleDisplay, i*1000);
// }


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

    return function (...args) {
        const now = Date.now();
        const remaining = wait - (now -previous);

        if (!previous && options.trailing !== false) {
            previous = now;
        }

        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(this, args);
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(() => {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                func.apply(this, args);
            }, remaining);
        }
    }
}


// const throttleDisplay = throttle(() => console.log("Hi"), 6000);

// for(let i=1; i<=10; i++) {
//     setTimeout(throttleDisplay, i*1000);
// }


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
  
    return function throttled(...args) {
      const now = Date.now();
      const later = () => {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(this, args);
      };
  
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
        result = func.apply(this, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
  
      return result;
    };
  }
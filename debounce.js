const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args){
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const opDebounce = (func, wait, options = {}) => {
    let timeout;
    let result;
    
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            if (!options.leading) result = func(...args);
            timeout = null;
        };

        if (!timeout) {
            if (options.leading) result = func(...args);
            timeout = setTimeout(later, wait);
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        }

        if (options.trailing &&!timeout) result = func(...args);

        return result;
    };
}

// const debouncedLog = debounce((message) => {
//     console.log(message);
//   }, 1000);
  
//   debouncedLog("Hello"); // Will log after 1 second if not called again
  
//   // Example usage of opDebounce
//   const immediateLog = opDebounce((message) => {
//     console.log(message);
//     return message;
//   }, 1000, { leading: true });
  
//   const result = immediateLog("World"); // Logs immediately and returns "World"
//   console.log(result); // "World"
function retry(count = 3, callback = async () => {}) {
    return async function (...args) {
        try {
            return await callback(...args);
        } catch (error) {
            if (count > 0) {
                return retry(count - 1, callback)(...args);
            } else {
                throw error;
            }
        }
    };
}

function timeout(delay = 0, callback = async () => {}) {
    return async function (...args) {
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), delay)
        );
        const callbackPromise = callback(...args);
        
        try {
            return await Promise.race([timeoutPromise, callbackPromise]);
        } catch (error) {
            throw error;
        }
    };
}
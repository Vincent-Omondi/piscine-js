async function race(promises = []) {
    if (promises.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 10000)); // No-op for empty array
    }
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(resolve, reject);
        });
    });
}


async function some(promises, count) {
    if (promises.length === 0 || count === 0) {
        return Promise.resolve([]); // Return empty array for empty input or count 0
    }

    return new Promise((resolve, reject) => {
        let results = new Array(promises.length); // Array to store results and preserve order
        let remaining = count;
        let resolvedCount = 0; // Keep track of how many promises resolved

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(result => {
                results[index] = result;
                resolvedCount++;
                if (resolvedCount === count) {
                    resolve(results.filter((_, i) => results[i] !== undefined)); // Filter out unneeded undefined slots
                }
            }).catch(reject);
        });
    });
}


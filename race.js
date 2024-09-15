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
        return Promise.resolve([]); // Return empty array for empty input
    }

    return new Promise((resolve, reject) => {
        const results = [];
        let remaining = count;

        promises.forEach(promise => {
            Promise.resolve(promise).then(result => {
                results.push(result);
                remaining--;

                if (remaining === 0) {
                    if (results[1] === undefined && results.length > 1) {
                        results = [results[1], results[0]];
                    }
                    resolve(results);
                }
            }).catch(reject);
        });
    });
}

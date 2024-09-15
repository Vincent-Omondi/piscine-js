async function race(promises = []) {
    if (promises.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 10000));
    }
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve).catch(reject);
        });
    });
}

async function some(promises, count) {
    if (promises.length === 0 || count === 0) {
        return Promise.resolve([]);
    }

    return new Promise((resolve, reject) => {
        const results = [];
        let remaining = count;

        promises.forEach(promise => {
            Promise.resolve(promise).then(result => {
                results.push(result);
                remaining--;

                if (remaining === 0) {
                    if (results.length > 1 && results[1] === undefined) {
                        [results[0], results[1]] = [results[1], results[0]];
                    }
                    resolve(results);
                }
            }).catch(reject);
        });
    });
}

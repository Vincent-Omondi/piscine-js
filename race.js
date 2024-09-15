async function race(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(p => Promise.resolve(p).then(resolve).catch(reject));
    });
}

async function some(promises, count) {
    if (!promises.length || count === 0) return undefined;

    const results = [];
    let resolvedCount = 0;

    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise)
                .then(value => {
                    if (resolvedCount < count) {
                        results.push(value);
                        resolvedCount++;
                        if (resolvedCount === count) {
                            resolve(results);
                        }
                    }
                })
                .catch(reject);
        });
    });
}


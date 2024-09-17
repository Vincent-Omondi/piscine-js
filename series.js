async function series(arr) {
    const result = [];
    for (const fn of arr) {
        result.push(await fn());
    }
    return result;
}

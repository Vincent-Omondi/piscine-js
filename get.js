function get(src, path) {
    const keys = path.split('.'); 
    let result = src; 

    for (let i = 0; i < keys.length; i++) {
        if (result === undefined) {
            return undefined; 
        }
        result = result[keys[i]]; 
    }

    return result;
}

// const src = { nested: { key: 'peekaboo' } };
// const path = 'nested.key';
// console.log(get(src, path)); 

function groupPrice(inputString) {
    const regex = /(\$[0-9]+\.[0-9]{2})|([A-Z]{3}[0-9]+\.[0-9]{2})/g;
    let matches;
    const result = [];

    while ((matches = regex.exec(inputString)) !== null) {
        const fullPrice = matches[0];
        
        if (fullPrice.startsWith('$')) {
            const integerPart = fullPrice.slice(1, -3);
            const decimalPart = fullPrice.slice(-2);
            result.push([fullPrice, integerPart, decimalPart]);
        } else {
            const integerPart = fullPrice.slice(3, -3);
            const decimalPart = fullPrice.slice(-2);
            result.push([fullPrice, integerPart, decimalPart]);
        }
    }

    return result;
}

// console.log(groupPrice('The price of the cereals is $4.00 and the electronics are USD123.45.'));

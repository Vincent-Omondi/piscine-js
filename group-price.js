function groupPrice(inputString) {
    // Define a regular expression to match prices
    const regex = /\b([A-Z]{3}\d+)\.(\d{2})\b/g;
    let matches;
    const result = [];

    // Use the regex to find all matches in the input string
    while ((matches = regex.exec(inputString)) !== null) {
        // Extract full price, integer part, and decimal part
        const fullPrice = matches[0];
        const integerPart = matches[1].slice(3); // Remove the currency part
        const decimalPart = matches[2];

        // Add the breakdown to the result array
        result.push([fullPrice, integerPart, decimalPart]);
    }

    return result;
}

// Example usage
// const exampleString = "The price of USD12.31 and EUR15.45 are listed.";
// console.log(groupPrice(exampleString));
// Output: [["USD12.31", "12", "31"], ["EUR15.45", "15", "45"]]

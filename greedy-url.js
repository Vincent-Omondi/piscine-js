function getURL(dataSet) {
    const urlRegex = /https?:\/\/[^\s]+/g;
    return dataSet.match(urlRegex) || [];
}

function greedyQuery(dataSet) {
    const greedyRegex = /https?:\/\/[^\s]+\?[^\s]+(?:&[^\s]+){2,}/g;
    return dataSet.match(greedyRegex) || [];
}

function notSoGreedy(dataSet) {
    const notSoGreedyRegex = /https?:\/\/[^\s]+\?[^\s]+(?:&[^\s]+){1,2}(?!&)/g;
    return dataSet.match(notSoGreedyRegex) || [];
}

// const dataSet = 'qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you';

// console.log(getURL(dataSet));
// console.log(greedyQuery(dataSet));
// console.log(notSoGreedy(dataSet));
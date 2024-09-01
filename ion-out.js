function ionOut(str){
    const regex = /\b(\w*?tion)\b/g;
    const matches = str.match(regex) || [];

    return matches.map(word => word.slice(0, -3));
}

// console.log(ionOut('The temptation for action is high in this nation.')); 
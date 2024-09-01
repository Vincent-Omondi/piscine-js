function sameAmount(str, reg1, reg2) {
    function countMatches(str, regex) {
        const globalRegex = new RegExp(regex, regex.flags + (regex.global ? '' : 'g'));
        return (str.match(globalRegex) || []).length;
    }

    const count1 = countMatches(str, reg1);
    const count2 = countMatches(str, reg2);

    return count1 === count2;
}

// console.log(sameAmount('ababab', /a/g, /b/g)); 
// console.log(sameAmount('abacaba', /a/g, /b/g));

// const data = "some string without qqqqqqq";
// console.log(sameAmount(data, /q /g, /qqqqqqq/g)); 
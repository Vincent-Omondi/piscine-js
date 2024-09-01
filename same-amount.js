function sameAmount(str, reg1, reg2){
    const matches1 = str.match(reg1) || [];

    const matches2 = str.match(reg2) || [];

    return matches1.length === matches2.length;
}

// console.log(sameAmount('ababab', /a/g, /b/g)); 
// console.log(sameAmount('abacaba', /a/g, /b/g));
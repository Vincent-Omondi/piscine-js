function RNA(dnaStrand) {
    let rnaStrand = '';

    for (let i = 0; i < dnaStrand.length; i++) {
        const nucleotide = dnaStrand[i];

        if (nucleotide === 'G') {
            rnaStrand += 'C';
        } else if (nucleotide === 'C') {
            rnaStrand += 'G';
        } else if (nucleotide === 'T') {
            rnaStrand += 'A';
        } else if (nucleotide === 'A') {
            rnaStrand += 'U';
        }
    }

    return rnaStrand;
}

function DNA(rnaStrand) {
    let dnaStrand = '';

    for (let i = 0; i < rnaStrand.length; i++) {
        const nucleotide = rnaStrand[i];

        if (nucleotide === 'C') {
            dnaStrand += 'G';
        } else if (nucleotide === 'G') {
            dnaStrand += 'C';
        } else if (nucleotide === 'A') {
            dnaStrand += 'T';
        } else if (nucleotide === 'U') {
            dnaStrand += 'A';
        }
    }

    return dnaStrand;
}

// console.log(RNA('ATCG')); 
// console.log(DNA('UAGC')); 

export const getArchitects = () => {
    const allElements = document.getElementsByTagName('*'); 
    const architects = [];
    const nonArchitects = [];

    for (const element of allElements) {
        if (element.tagName.toLowerCase() === 'a') {
            architects.push(element);
        } else {
            nonArchitects.push(element);
        }
    }
    return [architects, nonArchitects];
};

export const getClassical = () => {
    const allElements = document.getElementsByTagName('*'); 
    const classicalArchitects = [];
    const nonClassicalArchitects = [];

    for (const element of allElements) {
        if (element.classList.contains('classical') && element.tagName.toLowerCase() === 'a') {
            classicalArchitects.push(element);
        } else if (element.tagName.toLowerCase() === 'a') { 
            nonClassicalArchitects.push(element);
        }
    }
    return [classicalArchitects, nonClassicalArchitects];
};

export const getActive = () => {
    const allElements = document.getElementsByTagName('*'); 
    const activeClassicalArchitects = [];
    const nonActiveClassicalArchitects = [];

    for (const element of allElements) {
        if (element.classList.contains('classical') && element.classList.contains('active')) {
            activeClassicalArchitects.push(element);
        } else if (element.classList.contains('classical')) { 
            nonActiveClassicalArchitects.push(element);
        }
    }
    return [activeClassicalArchitects, nonActiveClassicalArchitects];
};

export const getBonannoPisano = () => {
    const bonannoElement = document.getElementById('BonannoPisano'); 
    const remainingActiveClassicalArchitects = [];

    if (bonannoElement) {
        const allElements = document.getElementsByTagName('*'); 
        for (const element of allElements) {
            if (element.classList.contains('classical') && element.classList.contains('active') && element !== bonannoElement) {
                remainingActiveClassicalArchitects.push(element);
            }
        }
    }
    return [bonannoElement, remainingActiveClassicalArchitects];
};

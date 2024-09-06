export const getArchitects = () => {
    const architects = Array.from(document.getElementsByTagName('a'));
    const nonArchitects = Array.from(document.querySelectorAll('body > :not(a)'));
    return [architects, nonArchitects];
  }
  
export const getClassical = () => {
    const classicalArchitects = Array.from(document.getElementsByClassName('classical'));
    const nonClassicalArchitects = Array.from(document.querySelectorAll('a:not(.classical)'));
    return [classicalArchitects, nonClassicalArchitects];
}

export const getActive = () => {
    const activeClassical = Array.from(document.querySelectorAll('.classical.active'));
    const nonActiveClassical = Array.from(document.querySelectorAll('.classical:not(.active)'));
    return [activeClassical, nonActiveClassical];
}

export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano');
    const otherActiveClassical = Array.from(document.querySelectorAll('.classical.active:not(#BonannoPisano)'));
    return [bonannoPisano, otherActiveClassical];
}
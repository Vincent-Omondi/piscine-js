function firstDayWeek(week, year) {
    if (week < 1 || week > 53 || isNaN(year)) {
        return;
    }
    year = parseInt(year);

    let firstMonday = new Date(year, 0, 1);

    let dayOfWeek = firstMonday.getDay();

    if (dayOfWeek !== 1) {
        firstMonday.setDate(firstMonday.getDate() + (8 - dayOfWeek) % 7);
    }
    let daysToAdd = (week - 1) * 7;

    let resultDate = new Date(firstMonday.getTime() + daysToAdd * 24 * 60 * 60 * 1000);

    if (resultDate.getFullYear() < year) {
        resultDate = new Date(year, 0, 1);
    }

    let dd = String(resultDate.getDate()).padStart(2, '0');
    let mm = String(resultDate.getMonth() + 1).padStart(2, '0');
    let yyyy = resultDate.getFullYear();
    
    return `${dd}-${mm}-${yyyy}`;
}

// console.log(firstDayWeek(1, '2020')); 
// console.log(firstDayWeek(52, '2021')); 
// console.log(firstDayWeek(2, '2021')); 
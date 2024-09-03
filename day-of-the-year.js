function dayOfTheYear(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear(year)) {
        daysInMonth[1] = 29;
    }

    let dayOfYear = 0;
    for (let i = 0; i < month; i++) {
        dayOfYear += daysInMonth[i];
    }
    dayOfYear += day;

    return dayOfYear;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// console.log(dayOfTheYear(new Date('0001-01-01'))); // 1
// console.log(dayOfTheYear(new Date('2024-09-03'))); // 247

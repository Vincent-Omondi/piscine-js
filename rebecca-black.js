function isFriday(date) {
    return date.getDay() === 5;
}
  
function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
}
  
function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
  
function isLastDayOfMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const lastDay = new Date(year, month + 1, 0).getDate();
    return day === lastDay;
}


// console.log(isFriday(new Date('2024-09-13')));
// console.log(isWeekend(new Date('2024-09-09'))); 
// console.log(isLastDayOfMonth(new Date('2024-02-29')));


function countLeapYears(date) {
    let year = date.getFullYear();
    let leapYears = 0;
  
    for (let i = 1; i <= year; i++) {
      if (isLeapYear(i)) {
        leapYears++;
      }
    }
  
    return leapYears;
}
  
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// console.log(countLeapYears(new Date('2024-01-01')));
// console.log(countLeapYears(new Date('2023-01-01'))); 

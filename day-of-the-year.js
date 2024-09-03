function dayOfTheYear(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const daysSinceFirstDay = Math.floor((date.getTime() - firstDayOfYear.getTime()) / (1000 * 60 * 60 * 24));
    return daysSinceFirstDay + 1;
}

// console.log(dayOfTheYear(new Date('2024-01-01'))); // 1
// console.log(dayOfTheYear(new Date('2024-02-29'))); // 60
// console.log(dayOfTheYear(new Date('2024-12-31'))); // 366
// console.log(dayOfTheYear(new Date('2023-01-01'))); // 1
// console.log(dayOfTheYear(new Date('2023-12-31'))); // 365
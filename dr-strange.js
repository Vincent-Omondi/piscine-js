function addWeek(date){
    const epoch = new Date('0001-01-01');
    const daysSinceEpoch = Math.floor((date - epoch)) / (1000*60*60*24);
    const dayIn14DayWeek = daysSinceEpoch%14;

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'];

    return days[dayIn14DayWeek];
}

function timeTravel({date, hour, minute, second}){
    const newDate = new Date(date);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
    return newDate
}

// console.log(addWeek(new Date('0001-01-01'))); 
// console.log(addWeek(new Date('0001-01-02'))); 
// console.log(addWeek(new Date('0001-01-07'))); 
// console.log(addWeek(new Date('0001-01-08'))); 
// console.log(addWeek(new Date('0001-01-09'))); 


// console.log(timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
// }).toString()
// )
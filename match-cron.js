function matchCron(cronString, date){
    const [minute, hour,day,month,dayOfWeek] = cronString.split(' ');

    if (minute !== '*' && parseInt(minute) !== date.getMinutes()){
        return false;
    }

    if (hour !== '*' && parseInt(hour) !== date.getHours()) {
        return false;
    }

    if (day !== '*' && parseInt(day) !== date.getDate()) {
        return false;
    }
    
    if (month !== '*' && parseInt(month) !== date.getMonth() + 1) {
        return false;
    }
    
    if (dayOfWeek !== '*' && parseInt(dayOfWeek) !== date.getDay() + 1) {
        return false;
    }
    
    return true;
}

// console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00'))); // true
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))); // true
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))); // false
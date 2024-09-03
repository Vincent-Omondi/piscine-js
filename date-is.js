function isValid(dateStr){
    return dateStr instanceof Date && !isNaN(dateStr);
}

function isAfter(currentDate, inputDate){
   if (!isValid(currentDate) || !isValid(inputDate)) return false;
   return (currentDate) > (inputDate);
}

function isBefore(currentDate, inputDate){
    if (!isValid(currentDate) || !isValid(inputDate)) return false;
    return (currentDate) < (inputDate);
}

function isFuture(date){
    return isValid(date) && (date) > new Date();
}

function isPast(date){
    return isValid(date) && (date) < new Date();
}


// console.log(isValid('2013/01/01'));
// console.log(isAfter("9/9/2024", "6/7/2024"))
// console.log(isBefore("9/9/2024", "6/7/2024"))
// console.log(isPast("09/02/2024"))


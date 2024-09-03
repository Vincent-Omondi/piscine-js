function isValid(dateStr){
    return !isNaN(new Date(dateStr).getTime());
}

function isAfter(currentDate, inputDate){
   if (!isValid(currentDate) || !isValid(inputDate)) return "Invalid Dates";
   return new Date (currentDate) > new Date (inputDate);
}

function isBefore(currentDate, inputDate){
    if (!isValid(currentDate) || !isValid(inputDate)) return " Invalid dates";
    return new Date(currentDate) < new Date(inputDate);
}

function isPast(date){
    return isValid(date) && new Date(date) < new Date();
}


// console.log(isValid("10/05/2019"));
// console.log(isAfter("9/9/2024", "6/7/2024"))
// console.log(isBefore("9/9/2024", "6/7/2024"))
// console.log(isPast("09/02/2024"))


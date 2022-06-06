// create the date object
// var date = new Date();

// let currentDate = new Date();
// let cDay = currentDate.getDate()
// let cMonth = currentDate.getMonth() + 1
// let cYear = currentDate.getFullYear()

let currentDay = 
let now = new Date();
dateformat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
console.log(dateformat);

//shows numeric value of day
console.log(cDay);
//shows numeric value of month
console.log(cMonth);
//shows numeric value of year
console.log(cYear);

//display date values in currentDay p tag on HTML
document.getElementById("currentDay").innerHTML = dateformat //("<p>" + cDay + "/" + cMonth + "/" + cYear + "</p>");


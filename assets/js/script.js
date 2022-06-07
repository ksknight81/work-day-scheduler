//create the date object
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth();
let cYear = currentDate.getFullYear();
// Month Array
let monthNameList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// Change month from Numeric Value to Words
let Month = monthNameList[cMonth];
//display date values in currentDay p tag on HTML
document.getElementById("currentDay").innerHTML = ("<p>" + Month + " " + cDay + "th, " + cYear + "</p>");


$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
 //this is using moment - can we figure out how this works without??  
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks  ****        
        //$ is referring to the front end class called .time-block and when its clicked, to start the function
        // function var blockTime will take 'this' hour identified by the id attribute
        // split("hour") =- What does that do?
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
// once the above had identified the block time, if it is less then timeNow, remove the class 
//then add the class of past to it to change the color ?  Might be explaining this wrong
            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    //takes the #class from index.html and the matching .description for 
    //task details and puts them in local storage corresponding to the same "hour8"
    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})

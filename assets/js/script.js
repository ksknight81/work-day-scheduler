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
 
function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks       
        //$ is referring to the front end class called .time-block (for each of them) and when its clicked, to start the function
        // function var blockTime will take 'this' hour identified by the id attribute 
        $(".time-block").each(function () {
            // (this) is referring to each individual ".time-block"
            // .attr("id") is referring to the ID 
            // split is taking the ("hour13") from html and splitting it to "hour" & "13" 
            //[1] is telling it to take the 2nd part of the array (ie, "13")
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
    // for sets the variables for the hours fields 
    for (var i = 8; i < 18; i++ ) {
        // creating a constant timeBlockID which is equal to the hour8 by doing #hour + i 
        //(variable to give the number of the hour) + description 
        const timeBlockId = "#hour" + i + " .description"; 
        $(timeBlockId).val(localStorage.getItem("hour" + i));
    }

    // this is not updating constantly - and only runs once at page load.  
    timeTracker();
});

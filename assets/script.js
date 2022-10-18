// this is the time var formatted to show, day of the week, month and the hour and min
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

// adding click event to the saves so that it saves anything within the description and parents of anything with an ID
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var textVal = $(this).siblings(".description").val();
        var timeVal = $(this).parent().attr("id");
 
         //this is saving my values into local storage
     localStorage.setItem(timeVal, textVal) })
    } );

    // adds reset button to clear the local storage and the reload the page after it does that.
    $(".resetBtn").on("click", function () {
        localStorage.clear();
        window.location.reload();
    } );
    
    // changes colors of the rows based off time, the current hour var is getting the current hour of the day
function colorChanging() {
var currentHour = moment().hour();
    
// loop for the timeblocks by number to add and remove classes based off the current hour and the time block its in 
$(".time-block").each(function(){
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        if (timeBlock < currentHour) {
            
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");

        } else if (timeBlock === currentHour) {
            
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");

        } else {
            
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    
    });

        // this grabs the items from the local storage from each hour
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    

    
};

// this is calling my color changing function 
colorChanging();

        
    

   


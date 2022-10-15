var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var textVal = $(this).siblings(".description").val();
        var timeVal = $(this).parent().attr("id");
 
         //this is saving my values into local storage
     localStorage.setItem(timeVal, textVal) })
    } );
    
    // changes colors of the rows based off time
function colorChanging() {
var currentHour = moment().hour();
    
$(".time-block").each(function(){
    var timeBlock = parseInt($(this).attr("id").split(".hour")[1]);

        if (timeBlock < currentHour) {
            
            $(this).removeClass(".future");
            $(this).removeClass(".present");
            $(this).addClass(".past");

        } else if (timeBlock === currentHour) {
            
            $(this).removeClass(".future");
            $(this).removeClass(".past");
            $(this).addClass(".present");

        } else {
            
            $(this).removeClass(".present");
            $(this).removeClass(".past");
            $(this).addClass(".future");
        }
    
    }) 

        // this grabs the items from the locacl storage from each hour
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

    colorChanging();
};




        
    

   


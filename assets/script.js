var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));


    
    // changes colors of the rows based off time
function colorChanging() {
var currentHour = moment().hour();
    
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
    
    }) 

};

        
    

   


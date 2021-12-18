//display current date
$("#currentDay").append(moment().format("dddd, MMMM Do"));

//saves task
$(".saveBtn").on("click", function () {

    var taskWhat = $(this).siblings(".description").val();
    var taskWhen = $(this).parent().attr("id");

    localStorage.setItem(taskWhen, taskWhat)
})
//loads task
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));
$("#hour6 .description").val(localStorage.getItem("hour6"));
$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));

//change color of task

function colorChange(){ 

    $(".time-block").each(function () {

        var currentHour = moment().hour() - moment.duration(8)
        var currentTime = parseInt($(this).attr("id").split("hour")[1]);

        if (currentTime <  currentHour) {
            $(this).removeClass("future", "present");
            $(this).addClass("past");
        }
        else if (currentTime === currentHour) {
            $(this).removeClass("past", "future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present", "past");
            $(this).addClass("future");
        }
    })
}

//continuously updates schedule
var intervalId = window.setInterval(function(){
    colorChange()
}, 500);


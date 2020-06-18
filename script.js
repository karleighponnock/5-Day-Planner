var tasks = localStorage.getItem("tasks")
if (tasks) {
    tasks = JSON.parse(tasks)
} else {
    tasks = {}   // hour: info
}
console.log(tasks)

function showLocalStorage() {

    for (key in tasks) {
console.log("--->", key, tasks[key])
        $("#" + key).siblings(".description").children().val(tasks[key])

    }
}

function updatecolors() {


}
function init() {
    showLocalStorage()
    updatecolors()
}
//log and track date and time
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


// Display current day and date in p tag 
//update every second so when the date switches so does disply
setInterval(() => {
    $("p#currentDay").text(moment().format("dddd, MMM Do YY"));
}, 1000);


$(".saveBtn").on("click", function () {
    console.log(this)
    // get the input value from the textarear
    var input = $(this).siblings(".description").children().val()
    var hour = $(this).attr("id")
    tasks[hour] = input
    console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks))

})
//



//if hour is before moment
// if(){
// $(".row").addClass("past");
// } if()
// //if hour the same as moment
// $(".row").addClass("present");
// } else
// //if hour is after moment
// $(".row").addClass("future");
// }


init()
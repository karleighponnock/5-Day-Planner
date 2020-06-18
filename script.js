
// Display current day and date in p tag 
//update every second so when the date switches so does disply
setInterval(() => {
    $("p#currentDay").text(moment().format("dddd, MMM Do YY"));
}, 1000);


//variable for locally stored contents of text area/ each hours tasks
var tasks = localStorage.getItem("tasks")

//if there is someting in local storage we parse it
if (tasks) {
    tasks = JSON.parse(tasks)
} else {
    tasks = {}   // hour: info
}

//locate the right tasks for EACH key/h1,h2,h3 
//so the correct information is stored and placed back into correct hour text area
function showLocalStorage() {
    for (key in tasks) {
console.log("--->", key, tasks[key])
        $("#" + key).siblings(".description").children().val(tasks[key])

    }
}

//function to create clicks on buttons
$(".saveBtn").on("click", function () {
    console.log(this)
    // get the input value from the text area
    var input = $(this).siblings(".description").children().val()
    var hour = $(this).attr("id")
    tasks[hour] = input
    console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks))

})

//rotate classes accordingly to past present and future
function updatecolors() {
    var currentH = moment().hours();

    $(".time-block").each(function(){
        //temp = temp.split(":");

        var blockH = parseInt($(this).attr("id"));
        console.log("Block hour: "+blockH);
        
        if(blockH < currentH){
            $(this).addClass("past");
        }
        else if(blockH === currentH){
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}


//initial function to show any local storage 
//and update which rows must be color coded
function init() {
    showLocalStorage()
    updatecolors()
}


//log and track date and time
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));




init()
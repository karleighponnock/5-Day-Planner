

//log and track date and time
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


// Display current day and date in p tag 
//update every second so when the date switches so does disply
setInterval(() => {
    $("p#currentDay").text(moment().format("dddd, MMM Do YY"));  
}, 1000);



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

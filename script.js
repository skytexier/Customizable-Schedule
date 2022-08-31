// Moment Variable / Current Date and Hour
var currentDate = moment().format("ha on MMM Do, YYYY");
$("#currentDay").text(currentDate);


//New Date
var date = new Date();
var hours = date.getHours();
console.log(hours);
date.toDateString();
console.log(hours);

// Current Time for variable usage
var currentTime = "10";
// moment().format("h");
currentTime.toString();

// moment().format("ha");
console.log(currentTime);

//Inputs
var userInput = $("input");
console.log(userInput);

//Button listener
var buttonSave = $('#button-addon2');

// buttonSave.click(timeColor);

//     input.type = "text"
//     input.name = "task"
//     input.value = ""
//     localStorage.setItem('task', input.value)
// });

//Times
var scheduleTime = $("#8, #9, #10, #11, #12, #1, #2, #3, #4, #5");
console.log(scheduleTime);
var inputTime = $("input");

function timeColor () {
    for (i = 0; i < scheduleTime.length; i ++) {
        var tableTime = scheduleTime[i].id;
        var inputNew = inputTime[i];
        console.log(tableTime);
        console.log(inputNew);
        console.log(currentTime);
        console.log(i);
    
        if (tableTime == currentTime){
            $(scheduleTime[i]).addClass("custom-present");
        }
        else if (tableTime > currentDate) {
            $(scheduleTime[i]).addClass("custom-past");
        }
    };
    };

timeColor ();



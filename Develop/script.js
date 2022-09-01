// Moment Variable / Current Date and Hour
var currentDate = moment().format("ha on MMM Do, YYYY");
$("#currentDay").text(currentDate);

//New Date JS Version /// Not currently used but wanted to set it up just incase
var date = new Date();
var hours = date.getHours();
console.log(hours);
date.toDateString();
console.log(hours);

// Moment.JS Time for variable usage
var currentTime = moment().format("H");
console.log(parseInt(currentTime, 10));
var numberTime = parseInt(currentTime, 10);

// moment().format("ha");
console.log(typeof currentTime);

//Inputs
var userInput = $("input");
console.log(userInput);

//Button listener
var buttonClear = $("#gettask");
var buttons = $("button");

//Times
var scheduleTime = $("#8, #9, #10, #11, #12, #13, #14, #15, #16, #17");
console.log(scheduleTime);
var inputTime = $("input");

//Function to color table rows depending on time
function timeColor() {
  for (i = 0; i < scheduleTime.length; i++) {
    var tableTime = scheduleTime[i].id;
    if (tableTime == numberTime) {
      $(scheduleTime[i]).addClass("custom-present");
    } else if (currentTime < 7) {
      $(scheduleTime[i]).addClass("custom-past");
    } else if (tableTime < numberTime) {
      $(scheduleTime[i]).addClass("custom-past");
    } else {
      $(scheduleTime[i]).addClass("custom-future");
    }
  }
};
//Always running this function
timeColor();

// Function to save tasks, navigating from button event up to table, table row and then back to input.
function taskSave(event) {
  console.log(
    $(event.currentTarget.parentElement.parentElement).find("input").val()
  );
  var textSave = $(event.currentTarget.parentElement.parentElement)
    .find("input")
    .val();
  var id = $(event.currentTarget.parentElement.parentElement).attr("id");
  console.log(id);
  localStorage.setItem(id, textSave);
};
//Save task event listener, on click for all buttons
buttons.on("click", taskSave);

function taskRecall() {
  for (i = 8; i < 18; i++) {
    var saveText = localStorage.getItem(i);
    var inputEl = $("#" + i).find("input");
    inputEl.val(saveText);
  }
};
taskRecall();

//Clear Tasks
buttonClear.on("click", function () {
  localStorage.clear();
});

// Notes on previous functions / attempts at saveing task
// function saveTask() {
//     for (i = 0; i < inputTime.length; i ++){
//     inputTime[i].id = i;
//     var inputNew = inputTime[i].value;
//     localStorage.setItem("task" + inputTime, inputNew);
//     var storedInput = localStorage.getItem("task");
//     function getTasks(){
//         for (i = 0; i < inputTime.length; i ++){

//         inputTime[i].value = storedInput;
//         inputTime.text(storedInput);
//         }
//     console.log(inputNew);
//     }
//     }
//     buttonTasks.click(getTasks);
// }

// buttonSave.click(saveTask);
// console.log(inputTime.value)

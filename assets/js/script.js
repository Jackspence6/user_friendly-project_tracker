/******************************************/
/* External dependencies */
/******************************************/
var dateDisplayEl = $("#date-display");
var datePickerEl = $("#datepicker");
var projectNameEl = $("#project-name");
var projectTypeEl = $("#project-type");
var hourlyWageEl = $("#hourly-wage");
var dueDateEl = $("#due-date");
var daysUntilDueDateEl = $("#days-until-due-date");
var estimatedTotalEarningsEl = $("#estimated-total-earnings");
var deleteProjectEl = $("#delete-project");
/******************************************/
/* Global variables and constants */
/******************************************/

/******************************************/
/* Function and class declarations */
/******************************************/
// Current Time & Date Display
function displayDate() {
  var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  dateDisplayEl.text(now);
}

// Datepicker with a minimum date setting in place
$(function () {
  $("#datepicker").datepicker({ minDate: -20 });
});


/******************************************/
/* Event listeners */
/******************************************/

/******************************************/
/* Document manipulation */
/******************************************/

/******************************************/
/* Initialization code */
/******************************************/
// Update the date and time display every second
setInterval(displayDate, 1000);
/******************************************/
/* Main logic */
/******************************************/

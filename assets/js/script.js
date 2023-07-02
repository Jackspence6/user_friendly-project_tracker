/******************************************/
/* External dependencies */
/******************************************/
var dateDisplayEl = $("#date-display");
var datePickerEl = $("#datepicker");
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

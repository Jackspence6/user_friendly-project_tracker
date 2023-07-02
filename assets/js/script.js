/******************************************/
/* External dependencies */
/******************************************/
var dateDisplayEl = $("#date-display");
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

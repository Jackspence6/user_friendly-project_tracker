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

// function to append project info to table
function appendToTable(projectName, projectType, hourlyWage, dueDate) {
  var newRow = $("<tr>")
    .append($("<td>").text(projectName))
    .append($("<td>").text(projectType))
    .append($("<td>").text(hourlyWage))
    .append($("<td>").text(dueDate));
  $("#myTable tbody").append(newRow);
}

/******************************************/
/* Event listeners */
/******************************************/
$("#submitBtn").on("click", function () {
  var projectName = $("#project-name").val();
  var projectType = $("#project-type").find(":selected").text();
  var hourlyWage = $("#hourly-wage").val();
  var dueDate = $("#datepicker").val();

  appendToTable(projectName, projectType, hourlyWage, dueDate);

  // Clear the input fields
  $("#project-name").val("");
  $("#project-type").val("");
  $("#hourly-wage").val("");
  $("#datepicker").val("");

  // Close the modal
  $("#myModal").modal("hide");
});

/******************************************/
/* Document manipulation */
/******************************************/
var projectName = projectNameEl.val();
var projectType = projectTypeEl.val();
var hourlyWage = hourlyWageEl.val();
var dueDate = dueDateEl.val();
var daysUntilDueDate = daysUntilDueDateEl.val();
var estimatedTotalEarnings = estimatedTotalEarningsEl.val();
var deleteProject = deleteProjectEl.val();
/******************************************/
/* Initialization code */
/******************************************/
// Update the date and time display every second
setInterval(displayDate, 1000);

/******************************************/
/* Main logic */
/******************************************/

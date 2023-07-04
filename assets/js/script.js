/******************************************/
/* External dependencies */
/******************************************/
var dateDisplayEl = $("#date-display");
var datePickerEl = $("#datepicker");
var tableEl = $(".table");
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
function appendToTable(
  projectName,
  projectType,
  hourlyWage,
  dueDate,
  daysUntilDueDate,
  estimatedTotalEarnings
) {
  var newRow = $("<tr>")
    .append($("<td>").text(projectName))
    .append($("<td>").text(projectType))
    .append($("<td>").text("$" + hourlyWage))
    .append($("<td>").text(dueDate))
    .append($("<td>").text(daysUntilDueDate + " days"))
    .append($("<td>").text("$" + estimatedTotalEarnings))
    .append($("<td>").text("X"));
  $("#myTable tbody").append(newRow);
}

// Function to handle the form submit
function handleSubmit() {
  var projectName = $("#project-name").val();
  var projectType = $("#project-type").find(":selected").text();
  var hourlyWage = $("#hourly-wage").val();
  var dueDate = $("#datepicker").val();
  var daysUntilDueDate = moment(dueDate, "MM/DD/YYYY").diff(moment(), "days");
  var estimatedTotalEarnings = calcTotalEarnings(hourlyWage, daysUntilDueDate);

  appendToTable(
    projectName,
    projectType,
    hourlyWage,
    dueDate,
    daysUntilDueDate,
    estimatedTotalEarnings
  );

  // Clear the input fields
  $("#project-name").val("");
  $("#project-type").val("");
  $("#hourly-wage").val("");
  $("#datepicker").val("");

  // Close the modal
  $("#myModal").modal("hide");
}

// function to calculate Total Earnings
function calcTotalEarnings(hourlyWage, daysUntilDueDate) {
  return hourlyWage * (daysUntilDueDate * 8);
}
/******************************************/
/* Event listeners */
/******************************************/
$("#submitBtn").on("click", handleSubmit);

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

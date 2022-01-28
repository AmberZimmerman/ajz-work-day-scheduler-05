

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

$("#weekly-schedule").dayScheduleSelector({
    days: [0, 1, 2, 3, 4, 5, 6],
    startTime:'08:00',
    endTime:'20:00',
    interval: 30,
    stringDays  : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    template    :'<div class="day-schedule-selector">' + 
    '<table class="schedule-table">' + 
    '<head class="schedule-header"></head>' + '<body class="schedule-rows"></body>' + 
    '</table>' + '<div>'
 });
    
 $("#weekly-schedule").data('artsy.dayScheduleSelector').deserialize({
      '0': [['09:30','11:00'], ['13:00','16:30']]
    });
    
/* check if data stored in local storage is stale and needs to be refreshed uses moment.js to check if the current time is past the specificed refresh window*/

$(document).ready(function() {
  var timestamp;
  var refreshUnit = "seconds";
  var refreshValue = 15;

  /************* function uodateTimestamp() ****************/
  function updateTimestamp(){
    timestamp = moment();
    localStorage.setItem("timestamp", timestamp);
    $("#timestamp").text( "Data last updated at: " + moment(localStorage.getItem("timestamp")).format("h:mm:ss a"));
  }

  /************* function isDataStale() ****************/
  function isDataStale(){
    // check if timestamp is set
    if (localStorage.getItem("timestamp") !== null) {
      var storedAt = moment(localStorage.getItem("timestamp"));
      var staleAt = moment(storedAt).add(refreshUnit, refreshValue);
      if (moment().isAfter(staleAt)){ return true; } //data is stale
    }
    else { return true;} //no timestamp found refesh the data
  }

  /************* Main Logic *************/
  
  //on page load update textbox with data from localstorage
  if ( localStorage.getItem('text') ) {
    if (isDataStale()) { $('input').val("Data is Stale");} //if data is stale, say so
    else{ $('input').val(localStorage.getItem('text')); } //otherwise, update textbox from localstorage
  }

  $('input').on('keyup', function() {
    localStorage.setItem('text', $(this).val());
    updateTimestamp();
  });
});
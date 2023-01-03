// Set the target date for the countdown
var targetDate = new Date("Jan 1, 2028 00:00:00").getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(function() {
  // Get the current date and time
  var currentDate = new Date().getTime();

  // Find the distance between the current date and the target date
  var distance = targetDate - currentDate;

  // Calculate the days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with the ID "countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the countdown has finished, write some text
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


var heb = false;
function toggle(){
    console.log(heb);
   return heb = !heb;

};
// Set the date we're counting down to
var countDownDate = new Date("september 6, 2021 18:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="root"

    document.getElementById("root").innerHTML = days + " ימים " + hours + " שעות "
  + minutes + " דקות " + seconds + " שניות ";  
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("root").innerHTML = "שנת שמיטה 2021-2022";
  }
}, 1000);
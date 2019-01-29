function Ticket(age, movie, time, military) {
  this.age = age,
  this.movie = movie,
  this.time = time,
  this.military = military
}

//UI
var ticket = new Ticket ();

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var ageInput = parseInt($("#age").val());
    var movieInput = $("#movie-title").val();
    var timeInput = $("#time").val();
    var militaryInput = $("#discount").val();
    var cost = 18;

    $(".title").append(movieInput);
    $(".time").append(timeInput);

    var newTicket = new Ticket(ageInput, movieInput, timeInput, militaryInput);

      if (newTicket.time === "10:00" || newTicket.age <= 10|| newTicket.age >= 60) {
        $(".totalCost").append("$" + (cost - 7));
      } else if (newTicket.military === "yes" && newTicket.time != "10:00") {
        $(".totalCost").append("$" +(cost - (cost * .20)) + "0");
      } else {
        $(".totalCost").append(cost);
      }
  })
})




// for(var i = 0; i <= movieArray.length; i++) {
//   var movie = movieArray[i];
//   $("#movie-title").append("<option value=" + movieArray[i].name + ">"+ movieArray[i].name +"</option>")
// }

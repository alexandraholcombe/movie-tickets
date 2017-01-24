//Business
var movieTitle;
var movieTime;
var age;
var yourTicket;
var ticketPrice = 12;



function Movie(movieTitle, showtimes){
  this.movieTitle = movieTitle;
  this.showtimes = showtimes;
}
function Ticket(age, movieTitle, time) {
  this.age = age;
  this.movieTitle = movieTitle;
  this.time = time;
};
function showtime(){
  $(".showtime").text(showtimes);
}
var showtimes = ["12:00", "3:00", "6:00", "9:00"];

var yourPrice = function(age, time) {
  if (time === "12:00" || time === "3:00" || time === "9:00") {
    yourTicket.price = ticketPrice * .75;
  } else {
    yourTicket.price = ticketPrice;
  }
}

//User Interface
$(function(){
  $("form.age-form").submit(function(event) {
    event.preventDefault();
    $(".age-verification").fadeOut();
    $(".age-form").fadeOut();
    age = $(".age-select").val();

    //Age selector
    if (age === "g") {
      console.log("THIS IS WORKING");
      $("#pg-rated-movies").hide();
      $("#pg13-rated-movies").hide();
      $("#r-rated-movies").hide();
    } else if (age === "pg") {
      $("#pg13-rated-movies").hide();
      $("#r-rated-movies").hide();
    } else if (age === "pg-13") {
      $("#r-rated-movies").hide();
    };
  });

  //Time panel appender
  $(".poster").click(function(){
    movieTitle = $(this).attr("alt");
    $(".panel").remove();
    $(this).parent().append('<div class="panel">' + '<ul class="showtimeList">' +
    '</ul>' + '</div>');
    showtimes.forEach(function(time) {
      $(".showtimeList").append('<li class="play-time">'+time+'</li>');
    });

    //Time taker
    $(".play-time").click(function(){
      time = this.textContent;
      yourTicket = new Ticket(age, movieTitle, time);
      console.log(yourTicket);

      $(".receipt").show();
      $(".age-verification").fadeIn();
      yourPrice(age, time);
      $(".receipt h2").text(yourTicket.movieTitle);
      $("#time").text(yourTicket.time);
      $("#ticket-price").text(yourTicket.price);
    });
  });
});

//Business
function Ticket(age, movieTitle, time) {
  this.age = age;
  this.movieTitle = movieTitle;
  this.time = time
};


//User Interface
$(function(){
  $("form.age-form").submit(function(event) {
    debugger;
    event.preventDefault();
    var age = $(".age-select").val();
    $(".age-verification").fadeOut();
    $(".row").delay(400).fadeIn();
  });
});

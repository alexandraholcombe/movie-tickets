//Business

//User Interface
$(function(){
  $("form.age-form").submit(function(event) {
    event.preventDefault();
    $(".age-verification").fadeOut();
    $(".row").delay(400).fadeIn();
  });
});

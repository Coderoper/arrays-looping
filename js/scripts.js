//Backend logic
function beepBoop(input){

  return "Hello " + input
};

//Front end logic
$(document).ready(function() {
  $("#form").submit(function(event) {
      event.preventDefault();
      var input = $("#input").val();
      console.log("hello")
      console.log(input);
      $("#result").text(beepBoop(input))
      document.getElementById("form").reset();
      documetn.getElementById("#result").reset();

    });
});

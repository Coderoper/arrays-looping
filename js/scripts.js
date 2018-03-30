//Backend logic
function beepBoop(input){

  return alert("hi")
};

//Front end logic
$(document).ready(function() {
  $("#form").submit(function(event) {
      event.preventDefault();
      var input = $("#input").val();
      console.log("hello")
      console.log(input);
      $("#result").text(beepBoop(input))
    });
});

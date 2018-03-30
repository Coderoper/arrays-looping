//Backend logic
function beepBoop(input){
  console.log(input)
  if (isNaN(result)) {
    alert("Please enter some integer")
    document.getElementById("form").reset();

  } else {
    return input
  };
  };

//Front end logic
$(document).ready(function() {
  $("#form").submit(function(event) {
      event.preventDefault();
      var input = parseInt($("#input").val());
      console.log("hello")
      console.log(input);
      $("#result").text(beepBoop(input))
      document.getElementById("form").reset();

    });
});

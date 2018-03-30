//Backend logic
var array =[];
var input;
var zeroes;
var beepStr;
var masterArr=[];
var replaceBeep;
var replaceBoop;
var replacePhrase;

function createArray(input){
  if (isNaN(input)) {
    alert("Please enter some integer")
    document.getElementById("form").reset();
  } else {
      for (var index = 1; index <= input; index += 1) {
        array.push(index);
      }
  };
  return array;
};
function swapNumbers(array) {
  console.log("swapNumbers")
  console.log(array)
  for (var index=1; index <= array.length; index++) {
    console.log(index);
    var masterStr=index.toString();
    console.log(masterStr);
    if (index % 3 == 0){
      var replacephrase = masterStr.replace(index, "I'm sorry Dave, I can't let you do that");
      masterArr.push(replacephrase);
    } else if ( index % 10 ==0){
        var replaceBeep = masterStr.replace(0, "Beep");
        masterArr.push(replaceBeep);
      } else {
          var replaceBoop = masterStr.replace(1, "Boop");
          masterArr.push(replaceBoop);
        }
}
  return masterArr

  };





//Front end logic
$(document).ready(function() {
  $("#form").submit(function(event) {
      event.preventDefault();
      var input = parseInt($("#input").val());
      createArray(input)
      // $("#result").text(createArray(input));
      $("#result2").text(swapNumbers(array));
      document.getElementById("form").reset();
    });
});

//Backend logic
var array =[];
var input;
var zeroes;
var beepStr;
var beepArr=[];
var replaceBeep;

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
  for (var index=1; index <= array.length; index++) {
    // console.log(index);
    var beepStr=index.toString();
    // console.log(beepStr);
    var replaceBeep = beepStr.replace(0, "Beep");
    // console.log(replaceBeep)
    beepArr.push(replaceBeep);
    console.log(beepArr);
  }
  return beepArr

};
//
// array.forEach(function(element) {
//   console.log("look" +element);
// });
// //   return
// //   array.forEach(function(part, index, newArray) {
// //   newArray[index] = "hello world";
// // });
//
// };



//Front end logic
$(document).ready(function() {
  $("#form").submit(function(event) {
      event.preventDefault();
      var input = parseInt($("#input").val());

      $("#result").text(createArray(input));
      $("#result2").text(swapNumbers(array));
      document.getElementById("form").reset();
    });
});

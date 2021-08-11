var topinput = document.getElementById("TopCaptionInput");
topinput.addEventListener("change", changeTop);

function changeTop() {
  var topinputvalue = document.getElementById("TopCaptionInput").value;
  document.getElementById("TopCaption").innerHTML = topinputvalue;
}

var botinput = document.getElementById("BottomCaptionInput");
botinput.addEventListener("change", changeBot);

function changeBot(){
  var botinputvalue = document.getElementById("BottomCaptionImput").value
  document.getElementById("BottomCaption").innerHTML = botimputvalue;
}

var fileinput = document.getElementById("fileinput");
fileinput.addEventListener("change", changeImg);

function changeImg(){
  var file = document.getElementById("fileinput").files[0];
  var img = document.getElementById('memebackground')
  img.src = window.URL.createObjectURL(file);
}


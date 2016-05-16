var fun_words = [];

function resetNames(){
  fun_words = ["Wow!", "Cool!", "Fancy!", "Fun!", "Amazing!", "Ha!"];
}    

function resetAnimation(){
  document.getElementById("chosen_one").removeAttribute("class");
}

function namePicker(){
  //Random Color Generator
  var random1 = Math.floor(Math.random() * 9);
  var random2 = Math.floor(Math.random() * 3);
  var random3 = Math.floor(Math.random() * 3);

  //Name Picker
  var namePick = fun_words.splice(Math.floor(Math.random() * fun_words.length), 1);
  var animatePick = [ "animated flipInX", "animated pulse", "animated rubberBand", "animated shake", "animated swing", "animated tada", "animated bounceIn", "animated rotateIn", "animated rotateIn", "animated flipInY"]
  
  //Display
  if (fun_words.length > 0) {
    document.getElementById("chosen_one").innerHTML = (namePick);
    document.getElementsByTagName("body")[0].style.backgroundColor = "#"+random1+random2+random3+random1+random2+random3;
    document.getElementById("chosen_one").setAttribute("class", animatePick[random1]);
  } else {
    resetNames();
  };
} 

function detectSpecialKeys(e){
    var evtobj=window.event? event : e
    if (evtobj.keyCode == 32)
      namePicker();
}
document.onclick=namePicker();
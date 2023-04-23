function myFunction(x) {
  x.classList.toggle("change");
}

function openSide() {
  document.getElementById('pop-menu').style.width="250px";
}

function closeSide() {
  document.getElementById('pop-menu').style.width="0px";

}

function openOption(evt, cityName){
  var i,  miniNavContent, miniNavOptions;//Counter in the for loop
 //declares the content
  //declares links

  miniNavContent = document.getElementsByClassName('miniNavContent');
  for(i = 0; i < miniNavContent.length; i++){
    miniNavContent[i].style.display = "none";
  }

  miniNavOptions = document.getElementsByClassName('miniNavOptions');
  for (i = 0; i < miniNavOptions.length; i++) {
    miniNavOptions[i].className = miniNavOptions[i].className.replace(" active", "");
  }

document.getElementById(cityName).style.display = "flex";
evt.currentTarget.className += " active";
}

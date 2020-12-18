function  chooseTab(event, tabName){ 
  var tabcontent = document.getElementsByClassName("tabcontent");
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++){
    tablinks[i].classList.remove("active");
    tabcontent[i].style.display = "none";
  } 
  document.getElementById(tabName).style.display = "block"; 
  document.getElementById(tabName).classList.add("active");
}
    //setting the default tab as our first page
document.getElementById("defaultTab").click();

function findTabWidth(number){
let tabButtons = document.getElementsByClassName("tablinks")
       //console.log(tabButtons);
  if(window.matchMedia("(max-width:700px)")){
    for (let i=0; i < tabButtons.length; i++){
      tabButtons[i].style.width = (screen.width / number);
    } 
       //document.getElementbyId
    //console.log(tabButtons[1].style.width);
  }
}
findTabWidth(document.getElementsByClassName("tablinks").length)

//function tabIcons()

function horiText(skewVal, BoxID, BoxText){
  var box = document.getElementById(BoxID);
  var text = document.getElementById(BoxText);
  //skew box and then unskew text by skewval
  box.style.transform = "skewY(" + skewVal + "deg)";
  text.style.transform = "skewY(-" +  skewVal + "deg)";
  //convert skewval to radians
  let skewRad = skewVal*Math.PI/180;
  //set text size to 66% of screen 
  text.style.maxWidth = screen.width*0.7;
  console.log(text.style.maxWidth);
  console.log(Math.tan(skewRad));
  text.style.paddingTop = Math.tan(skewRad)*(parseInt(text.style.maxWidth))/2;
  text.style.paddingTop = Math.tan(skewRad)*(parseInt(text.style.maxWidth))/2;
  console.log(text.style);
  //padding top and bottom = Math.tan(skewVal)*(max width of text)/2
  

}

horiText(11, "diag-box-one", "dbo-content");

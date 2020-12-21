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
    //setting the home tab as our first page
document.getElementById("homeButton").click();

function horiText(skewVal, BoxID, BoxText){
  var box = document.getElementById(BoxID);
  var text = document.getElementById(BoxText);
  //skew box and then unskew text by skewval
  box.style.transform = "skewY(" + skewVal + "deg)";
  skewVal < 0 ? text.style.transform = "skewY(" +  Math.abs(skewVal) + "deg)": text.style.transform = "skewY(-" +  skewVal + "deg)";
  //convert skewval to radians
  let skewRad = Math.abs(skewVal)*Math.PI/180;
  //set text size to 66% of screen 
  text.style.maxWidth = screen.width*0.6;
  text.style.paddingLeft = screen.width*0.1;
  text.style.paddingRight = screen.width*0.1;
  box.style.paddingTop = Math.tan(skewRad)*(parseInt(text.style.maxWidth))/2;
  box.style.paddingBottom = Math.tan(skewRad)*(parseInt(text.style.maxWidth))/2;
}

horiText(8, "diag-box-one", "dbo-content");
horiText(8, "diag-box-two", "dbo-content-two");
horiText(8, "diag-box-three", "dbo-content-three");

function findTabWidth(number){
  var tabButtons = document.getElementsByClassName("tablinks");
      for (let i=0; i < tabButtons.length; i++){
        tabButtons[i].style.width = (window.innerWidth / number);
      } 
  }
  findTabWidth(document.getElementsByClassName("tablinks").length);

//function randoQuote(){
//get random number, excluding numbers already on page
//choose random spot
//choose quote corresponding to number
//make quote appear in that spot
//
//}


//addeventlistenerclick for quote

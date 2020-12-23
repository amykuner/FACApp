//function to hide all tabs other than the one clicked
function  chooseTab(event, tabName){ 
  var tabcontent = document.getElementsByClassName("tabcontent");
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++){
    //hides all tabs
    tablinks[i].classList.remove("active");
    tabcontent[i].style.display = "none";
  } 
  //makes the selected tab active and shows it
  document.getElementById(tabName).style.display = "block"; 
  document.getElementById(tabName).classList.add("active");
}
    //setting the home tab as our first page
document.getElementById("homeButton").click();

//function to change the diagonal background sections but keep text horizontal
function horiText(skewVal, BoxID, BoxText){
  var box = document.getElementById(BoxID);
  var text = document.getElementById(BoxText);
  //skew box and then unskew text by skewval so it's horizontal
  box.style.transform = "skewY(" + skewVal + "deg)";
  skewVal < 0 ? text.style.transform = "skewY(" +  Math.abs(skewVal) + "deg)": text.style.transform = "skewY(-" +  skewVal + "deg)";
  //convert skewval to radians so that js can use it in the tan function
  let skewRad = Math.abs(skewVal)*Math.PI/180;
  //set text size to 60% of screen and give padding either side - do I need padding??
  text.style.maxWidth = screen.width*0.6;
  text.style.paddingLeft = screen.width*0.1;
  text.style.paddingRight = screen.width*0.1;
  //adds padding to the top and bottom so the text will always fit within the horizontal bounds
  box.style.paddingTop = Math.tan(skewRad)*(parseInt(text.style.maxWidth))/2;
  box.style.paddingBottom = Math.tan(skewRad)*(parseInt(text.style.maxWidth))/2;
}

//setting all the horizontal boxes with the same skew when the page loads
horiText(8, "diag-box-one", "dbo-content");
horiText(8, "diag-box-two", "dbo-content-two");
horiText(8, "diag-box-three", "dbo-content-three");

//function to find the width of the buttons so they fill the whole top of browser
function findTabWidth(number){
  var tabButtons = document.getElementsByClassName("tablinks");
  //making the width for each tab the size I want
      for (let i=0; i < tabButtons.length; i++){
        tabButtons[i].style.width = (window.innerWidth / number);
      } 
  }
//applying findTabWIdth to all of my tabs and then setting it to execute when the window is resized
findTabWidth(document.getElementsByClassName("tablinks").length);
window.addEventListener("resize",findTabWidth);

//function randoQuote(){
//do queryselectorAll
//for (let i = 0; i < quotes.length; i+){

//}
//get random number, excluding numbers already on page
//choose random spot
//choose quote corresponding to number
//make quote appear in that spot
//
//}

//addeventlistenerclick for quote
var pics = Array.from(document.getElementsByClassName("carousel"));

function carousel(current){
  console.log(pics);
  for(let i = 0; i < pics.length; i++){
    pics[i].style.display = "none";
    current.style.display = "inline-block";
  }
}
carousel(document.getElementById("carOne"));

function nextPic(current){
  //indexOf(display )
  pics.indexOf(current) == pics.length - 1? carousel(pics[0]) : carousel(pics[pics.indexOf(current) + 1]);
}
nextPic(document.getElementById("carTwo"));


function prevPic(current){
  pics.indexOf(current) == 0? carousel(pics[pics.length - 1]) : carousel(pics[pics.indexOf(current) - 1]);
  
}
//prevPic(document.getElementById("carOne"));


//addEventListener(click, )
//add event button: click on forward means execute function carousel of current + 1
//add event button: click on back means execute function carousel of current - 1

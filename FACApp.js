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

//function to change the diagonal background sections but keep text horizontal - purely to experiment while deciding on style
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

//define the elements of the image carousel for the functions below
var pics = Array.from(document.getElementsByClassName("carousel"));
var cartext = Array.from(document.getElementsByClassName("carouseltext"));

function carousel(current){
  for(let i = 0; i < pics.length; i++){
    pics[i].style.display = "none"; //hides all carousel photos
    cartext[i].style.display = "none"; //hides all carousel text
    current.style.display = "inline-block"; //selects the current photo
    cartext[pics.indexOf(current)].style.display = "inline-block"; //selects the corresponding text block
  }
}
carousel(document.getElementById("carOne"));

function nextPic(){
  for(let i = 0; i < pics.length; i++){
    if(pics[i].style.display == "inline-block"){
  i == pics.length - 1 ? carousel(pics[0]) : carousel(pics[i + 1]);
  return;
}}}

function prevPic(){
  for(let i = 0; i < pics.length; i++){
    if(pics[i].style.display == "inline-block"){-
  i == 0 ? carousel(pics[pics.length -1]) : carousel(pics[i - 1]);
  return;
}}}

function footerFlat(tabName){
  document.getElementById(tabName).scrollHeight + (window.innerHeight * 0.06) + (window.innerWidth* 0.04) <= window.innerHeight? document.body.style.paddingBottom = 0: document.body.style.paddingBottom = "8.5vw";
} 

function darkMode(){
    document.documentElement.classList.toggle("dark");
  }
document.getElementById("dmbutton").addEventListener("click", darkMode);

function dmBall(){
  document.documentElement.className == "dark" ? document.getElementById("dmball").style.transform = "translateX(30px)" : document.getElementById("dmball").style.transform = "translateX(0px)";
}
document.getElementById("dmbutton").addEventListener("click", dmBall);

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   // dark mode
// }

//function flip(section){
  //.words.style.display = "none";
  //.expl.style.display = "inline-block";
//}

var cardobjs = document.getElementsByClassName("cards");
var cards = Array.prototype.slice.call(cardobjs, 0)
console.log(cards);

function higherLower(){
//makes all backgrounds standard
for (let i = 0; i < cards.length; i++){
  cards[i].className = "cards";
  cards[i].textContent = "";
}
  //call next bit when a button is clicked

  //order them by class
  let i = 0;
  while(i < 6){
      //higher.style.display="flex";
      //lower.style.display="flex";
      //higher.onclick 
      //if random > card means random = Math.floor(Math.random()*13) + 1; i =+ 1 and cards[i].textContent = random;      cards[i].className = "cards-selected";
      //if not, alert about losing
      //lower.onclick means i =+1;
      //counter plus one when button is clicked
      i++
    }
    alert("WINNER WINNER CHICKEN DINNER")
  }
  //if(random > card2 inner text &&guesses[0 option selected is higher || random number < guesses[0] && higher = name
    // console.log(Math.floor(Math.random()*13) + 1);
    //setcurrent card class to flipped and then add random number in center
    // guesses.push(prompt("Please enter either 'Higher' or 'Lower')"));
    


// //reveal next card. if answer correct, repeat loop
// alert("You got beaten by probability. Do you want to try again?");


function nextCard(i){
  for(var i = 0; i < 1; i++){
    if(cards.length > 0){
      let random = Math.floor(Math.random()*13) + 1;
      console.log(i);
      cards[i].textContent = random;
      cards[i].className = "cards-selected";
      //higher.style.display="none";
      //lower.style.display="none";
      i--;
    }
  }
}

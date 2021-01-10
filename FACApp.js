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

//function to add padding to boxes
function horiText(skewVal, BoxID){
  var box = document.getElementById(BoxID);
  //convert skewval to radians so that js can use it in the tan function
  let skewRad = Math.abs(skewVal)*Math.PI/180;
  //adds padding to the top and bottom so the text will always fit within the horizontal bounds
  box.style.paddingTop = Math.tan(skewRad)*30 + "ch";
  box.style.paddingBottom = Math.tan(skewRad)*30 + "ch";
}

//setting all the horizontal boxes with correct padding
horiText(8, "diag-box-one");
horiText(8, "diag-box-two");
horiText(8, "diag-box-three");

//define the elements of the image carousel for the functions below
var pics = Array.from(document.getElementsByClassName("carousel"));
var cartext = Array.from(document.getElementsByClassName("carouseltext"));

//image carousel pics and text hidden unless chosen
function carousel(current){
  for(let i = 0; i < pics.length; i++){
    pics[i].style.display = "none"; //hides all carousel photos
    cartext[i].style.display = "none"; //hides all carousel text
    current.style.display = "inline-block"; //selects the current photo
    cartext[pics.indexOf(current)].style.display = "inline-block"; //selects the corresponding text block
  }
}

//show image one as default
carousel(document.getElementById("carOne"));

//switches to next picture in carousel
function nextPic(){
  for(let i = 0; i < pics.length; i++){
    if(pics[i].style.display == "inline-block"){
  i == pics.length - 1 ? carousel(pics[0]) : carousel(pics[i + 1]);
  return;
}}}

//switches to previous picture in carousel
function prevPic(){
  for(let i = 0; i < pics.length; i++){
    if(pics[i].style.display == "inline-block"){-
  i == 0 ? carousel(pics[pics.length -1]) : carousel(pics[i - 1]);
  return;
}}}

//sets the footer as flat on the bottom of the screen - no excess scroll unless necessary
function footerFlat(tabName){
  document.getElementById(tabName).scrollHeight + (window.innerHeight * 0.06) + (window.innerWidth* 0.04) <= window.innerHeight? document.body.style.paddingBottom = 0: document.body.style.paddingBottom = "8.5vw";
} 

//triggers dark mode
function darkMode(){
    document.documentElement.classList.toggle("dark");
  }
document.getElementById("dmbutton").addEventListener("click", darkMode);

//moves the ball on dark mode switch
function dmBall(){
  document.documentElement.className == "dark" ? document.getElementById("dmball").style.transform = "translateX(30px)" : document.getElementById("dmball").style.transform = "translateX(0px)";
}
document.getElementById("dmbutton").addEventListener("click", dmBall);

//sets dark mdoe if user has dark mode settings on
function startMode(){
  if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
    darkMode();
    dmBall();
  }
}

startMode();

var cards = document.querySelectorAll("div.cards");
var higher = document.getElementById("higher");
var lower = document.getElementById("lower");

//NEED TO STREAMLINE FUNCTION
//game function 
function higherLower(){
//makes all backgrounds standard on reset
for (let i = 0; i < cards.length; i++){
  cards[i].className = "cards";
  cards[i].textContent = "";
}
  var randoms = [];
  //show first card
  randoms.push(Math.floor(Math.random()*13) + 1);
  if (randoms[0] == 1||randoms[0] == 11||randoms[0] == 12||randoms[0] == 13){
    cards[0].textContent = numberCards(randoms[0]);
  } else{
    cards[0].textContent = randoms[0];
  }
  cards[0].className = "cards-selected";
  higher.style.display="inline-block";
  lower.style.display="inline-block";

  var i = 0;

      higher.onclick = function(){
        if(i < 5){
         randoms.push(Math.floor(Math.random()*13) + 1);
          cards[i+1].className = "cards-selected";
          if (randoms[i+1] == 1||randoms[i+1] == 11||randoms[i+1] == 12||randoms[i+1] == 13){
            cards[i+1].textContent = numberCards(randoms[i+1]);
          } else{
            cards[i+1].textContent = randoms[i+1];
          }
          if (randoms[i+1] >= randoms[i]){
            if(i == 4){
              alert("Congratulations! You are the master of probability! You can't stop when you're on a winning streak, so select 'New Game' to play again.")
              higher.style.display="none";
              lower.style.display="none";
            }
            else{
            i++;
            }
          } else {
          i=+ 5;
          alert("Uh oh. Looks like you got beaten by probability! Click 'New Game' to try again.");
          higher.style.display="none";
          lower.style.display="none";
          return;
          }
        }
      }

      lower.onclick = function(){
        if(i < 5){
          randoms.push(Math.floor(Math.random()*13) + 1);
          cards[i+1].className = "cards-selected";
          if (randoms[i+1] == 1||randoms[i+1] == 11||randoms[i+1] == 12||randoms[i+1] == 13){
            cards[i+1].textContent = numberCards(randoms[i+1]);
          } else{
            cards[i+1].textContent = randoms[i+1];
          }
          if(randoms[i+1] <= randoms[i]){
            if(i == 4){
              alert("Congratulations! You are the master of probability! You can't stop when you're on a winning streak, so select 'New Game' to play again.")
              higher.style.display="none";
              lower.style.display="none";
            }
            else{
              i++;
            }
          } else {
            i=+ 5;
            alert("Uh oh. Looks like you got beaten by probability! Click 'New Game' to try again.");
            higher.style.display="none";
            lower.style.display="none";
            return;
        }
      } 
    }
  }
//streamline this function

//create card function to call within higherlower where if random number is 11 12 13 it returns jack queen king instead
function numberCards(number){
  var letter;
  switch(number){
    case 1:
      letter = "A";
      break;
    case 11:
      letter = "J";
      break;
    case 12:
      letter = "Q";
      break;
    case 13:
      letter = "K";
      break;
  }
  return letter;
}

//overflow function:
// while <  && parseint size >= 20
//expl.text.style = parseint() - 1 + "px"
//
//
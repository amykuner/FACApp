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
  text.style.maxWidth = screen.width*0.6 + "px";
  text.style.paddingLeft = screen.width*0.1 + "px";
  text.style.paddingRight = screen.width*0.1 + "px";
  //adds padding to the top and bottom so the text will always fit within the horizontal bounds
  box.style.paddingTop = Math.tan(skewRad)*(parseInt(text.style.maxWidth))/2 + "px";
  box.style.paddingBottom = Math.tan(skewRad)*(parseInt(text.style.maxWidth))/2 + "px";
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

function startMode(){
  if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
    darkMode();
    dmBall();
  }
}

startMode();

//function flip(section){
  //.words.style.display = "none";
  //.expl.style.display = "inline-block";
//}

// function touchHover(){
//   if (matchMedia = phone){
//     if doesnt equal ;
//     onclick() means:
// .wrapper section:hover .expl, 
// .wrapper section:hover .word
// .wrapper section:hover
//   }
// }

// var wrapperKids = document.getElementsByClassName("wrapper")[0].childNodes;


// for (let i = 0; i < wrapperKids.length; i++){
//   wrapperKids[i].addEventListener("click", wordHead(i));
// }

// function wordHead(i){
//   allWords = document.getElementsByClassName("word");
//   allExpls = document.getElementsByClassName("expl");
//     allWords[i].className = "p";
//     allExpls[i].style.display = "none";
//     console.log(allWords);
//     i--;
//   }

   allWords = document.getElementsByClassName("word");
   allExpls = document.getElementsByClassName("expl");

  for (let i = 0; i < allWords.length; i++){
    allWords[i].addEventListener("click", wordHead(i));
  }
//     allExpls[i].style.display = "none";
//     console.log(allWords);
//     i--;
//   }

// function wordHead(i){
//   allWords[i].className="p";
//   allExpls[i].style.display = "inline-block";
// }



var cards = document.querySelectorAll("div.cards");
var higher = document.getElementById("higher");
var lower = document.getElementById("lower");

//STREAMLINE FUNCTION
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
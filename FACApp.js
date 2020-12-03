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

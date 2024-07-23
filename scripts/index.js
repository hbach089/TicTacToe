
const pVp=document.getElementById("playerVplayer");
const pVc=document.getElementById("playerVComputer");
const light=document.getElementById("light");
const dark=document.getElementById("dark");


//Get a cookie of the page background color so that it opens with that color
//when after we close the page (saves the color if it doesn't exist yet as a cookie)
const theme=localStorage.getItem('theme');
if(theme){
  document.body.classList.add(theme);
}

//Go to page Player vs Player page
pVp.addEventListener("click",function(){
  window.location='vPlayer.html';
  console.log("Player vs Player!");
});

//Go to page Player vs Computer page
pVc.addEventListener("click",function(){
  window.location='vComputer.html';
  console.log("Player vs Computer!");
});

//change the background from dark to light
light.addEventListener("click",function(){
  //document.body.style.background = "rgb(225, 238, 238)";
  //localStorage.bgcolor="rgb(225, 238, 238)";
  console.log(window.getComputedStyle( document.body ,null).getPropertyValue('background-color'));
  document.body.classList.replace('dark','light');
  localStorage.setItem('theme','light');
});

//change the background from light to dark
dark.addEventListener("click",function(){
  // document.body.style.background = "black";
  // localStorage.bgcolor="black";
  console.log(window.getComputedStyle( document.body ,null).getPropertyValue('background-color'));
  document.body.classList.replace('light','dark');
  localStorage.setItem('theme','dark');
});


















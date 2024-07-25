import * as lib from './library.js';

//Counter to determine if there is a tie
let a=0;

// document.body.style.background=localStorage.bgcolor;

//Alternate between X and O
const whosTurn=document.getElementById('whoTurn');

//get bgcolor cookie
const bgColor=localStorage.getItem('theme');

//Different color for X and O
let xcolor,ocolor;

//Get a cookie of the page background color so that it opens with that color
//when after we close the page (saves the color if it doesn't exist yet as a cookie)
const theme=localStorage.getItem('theme');
if(theme){
  document.body.classList.add(theme);
}

//Call function to set colors of X and O based on bgColor
// setColors(bgColor);

(function setColors(){
  if(bgColor=='dark'){
    xcolor='yellow';
    ocolor='orange';
  }
  else{
    xcolor='blue';
    ocolor='red';
  }
})(bgColor);

//Event listeners for each button in the table
lib.btn1.addEventListener("click",function(){
  if(a%2==0){
    whosTurn.innerHTML="O turn";
    lib.btn1.style.color=xcolor;
    lib.btn1.value="X";
  }
  else{
    whosTurn.innerHTML="X turn";
    lib.btn1.style.color=ocolor;
    lib.btn1.value="O";
  }
  a+=1;
  lib.btn1.disabled=true;
});



lib.btn2.addEventListener("click",function(){
  if(a%2==0){
    whosTurn.innerHTML="O turn";
    lib.btn2.style.color=xcolor;
    lib.btn2.value="X";
  }
  else{
    whosTurn.innerHTML="X turn";
    lib.btn2.value="O";
    lib.btn2.style.color=ocolor;
  }
  a+=1;
  lib.btn2.disabled=true;
});

lib.btn3.addEventListener("click",function(){
  if(a%2==0){
    whosTurn.innerHTML="O turn";
    lib.btn3.style.color=xcolor;
    lib.btn3.value="X";
  }
  else{
    whosTurn.innerHTML="X turn";
    lib.btn3.value="O";
    lib.btn3.style.color=ocolor;
  }
  a+=1;
  lib.btn3.disabled=true;
});

lib.btn4.addEventListener("click",function(){
  if(a%2==0){
    whosTurn.innerHTML="O turn";
    lib.btn4.style.color=xcolor;
    lib.btn4.value="X";
  }
  else{
    whosTurn.innerHTML="X turn";
    lib.btn4.value="O";
    lib.btn4.style.color=ocolor;
  }
  a+=1;
  lib.btn4.disabled=true;
});

lib.btn5.addEventListener("click",function(){
  if(a%2==0){
    whosTurn.innerHTML="O turn";
    lib.btn5.style.color=xcolor;
    lib.btn5.value="X";
  }
  else{
    whosTurn.innerHTML="X turn";
    lib.btn5.value="O";
    lib.btn5.style.color=ocolor;
  }
  a+=1;
  lib.btn5.disabled=true;
});

lib.btn6.addEventListener("click",function(){
  if(a%2==0){
    whosTurn.innerHTML="O turn";
    lib.btn6.style.color=xcolor;
    lib.btn6.value="X";
  }
  else{
    whosTurn.innerHTML="X turn";
    lib.btn6.style.color=ocolor;
    lib.btn6.value="O";
  }
  a+=1;
  lib.btn6.disabled=true;
});

lib.btn7.addEventListener("click",function(){
  if(a%2==0){
    whosTurn.innerHTML="O turn";
    lib.btn7.style.color=xcolor;
    lib.btn7.value="X";
  }
  else{
    whosTurn.innerHTML="X turn";
    lib.btn7.style.color=ocolor;
    lib.btn7.value="O";
  }
  a+=1;
  lib.btn7.disabled=true;
})

lib.btn8.addEventListener("click",function(){
  if(a%2==0){
    whosTurn.innerHTML="O turn";
    lib.btn8.style.color=xcolor;
    lib.btn8.value="X";
  }
  else{
    whosTurn.innerHTML="X turn";
    lib.btn8.style.color=ocolor;
    lib.btn8.value="O";
  }
  a+=1;
  lib.btn8.disabled=true;
});


lib.btn9.addEventListener("click",function(){
  if(a%2==0){
    whosTurn.innerHTML="O turn";
    lib.btn9.style.color=xcolor;
    lib.btn9.value="X";
  }
  else{
    whosTurn.innerHTML="X turn";
    lib.btn9.style.color=ocolor;
    lib.btn9.value="O";
  }
  a+=1;
  lib.btn9.disabled=true;
});

/////////////////////////////////////////////////////////////
/////////////////////WHEN USER WINS GAME/////////////////////
/////////////////////////////////////////////////////////////

function alertbox_gameEnd(bx,by,bz,winnerText){
  //No more turns
  whosTurn.innerHTML="";

  //Display game end box with play again button
  lib.rstbtn.style.display='block';
  lib.gameBoxEnd.style.display='block';
  //disable all buttons in tictactoe table
  
  //Display what player won (X or O)
  lib.plyWin.style.display='block';
  let whowon=document.createTextNode(winnerText);
  lib.plyWin.appendChild(whowon);

  //disable all buttons in tictactoe table
  lib.btn1.disabled=true;
  lib.btn2.disabled=true;
  lib.btn3.disabled=true;
  lib.btn4.disabled=true;
  lib.btn5.disabled=true;
  lib.btn6.disabled=true;
  lib.btn7.disabled=true;
  lib.btn8.disabled=true;
  lib.btn9.disabled=true;
  
  //When player wins, disable all other buttons and transition to make them smaller
  for(let i in lib.btnclass){
    if(!(i==bx || i==by || i==bz)){
      lib.btnclass[i].style.transition='0.4s';
      lib.btnclass[i].style.opacity='0.3';
      lib.btnclass[i].style.transform='scale(0.7)';
    }
  }
};

//Reset btn when game ends (Play Again)
lib.rstbtn.addEventListener("click",function(){
  window.location.reload();
});

//Function to determine which combination of 3 Xs or 3 Os won
document.getElementById("tictactoe").addEventListener("click",function(){
  if(lib.btn1.value=="X" && lib.btn9.value=="X" && lib.btn5.value=="X"){
    alertbox_gameEnd('buttons.b1','buttons.b5','buttons.b9','X wins!');
    throw new Error();
  }
  else if(lib.btn1.value=="O" && lib.btn9.value=="O" && lib.btn5.value=="O"){
    alertbox_gameEnd('buttons.b1','buttons.b5','buttons.b9','O wins!');
    throw new Error();
  }
  else if(lib.btn1.value=="X" && lib.btn2.value=="X" && lib.btn3.value=="X"){
    alertbox_gameEnd('buttons.b1','buttons.b2','buttons.b3','X wins!'); 
    throw new Error();
  }
  else if(lib.btn1.value=="O" && lib.btn2.value=="O" && lib.btn3.value=="O"){
    alertbox_gameEnd('buttons.b1','buttons.b2','buttons.b3','0 wins!'); 
    throw new Error();
  }
  else if(lib.btn4.value=="X" && lib.btn5.value=="X" && lib.btn6.value=="X"){
    alertbox_gameEnd('buttons.b4','buttons.b5','buttons.b6','X wins!');
    throw new Error();
  }
  else if(lib.btn4.value=="O" && lib.btn5.value=="O" && lib.btn6.value=="O"){
    alertbox_gameEnd('buttons.b4','buttons.b5','buttons.b6','O wins!');
    throw new Error();
  }
  else if(lib.btn7.value=="X" && lib.btn8.value=="X" && lib.btn9.value=="X"){
    alertbox_gameEnd('buttons.b7','buttons.b8','buttons.b9','X wins!'); 
    throw new Error();
  }
  else if(lib.btn7.value=="O" && lib.btn8.value=="O" && lib.btn9.value=="O"){
    alertbox_gameEnd('buttons.b7','buttons.b8','buttons.b9','O wins!'); 
    throw new Error();
  }
  else if(lib.btn1.value=="X" && lib.btn4.value=="X" && lib.btn7.value=="X"){
    alertbox_gameEnd('buttons.b1','buttons.b4','buttons.b7','X wins!');
    throw new Error();
  }
  else if(lib.btn1.value=="O" && lib.btn4.value=="O" && lib.btn7.value=="O"){
    alertbox_gameEnd('buttons.b1','buttons.b4','buttons.b7','O wins!');
    throw new Error();
  }
  else if(lib.btn2.value=="X" && lib.btn5.value=="X" && lib.btn8.value=="X"){
    alertbox_gameEnd('buttons.b2','buttons.b5','buttons.b8','X wins!');
    throw new Error();
  }
  else if(lib.btn2.value=="O" && lib.btn5.value=="O" && lib.btn8.value=="O"){
    alertbox_gameEnd('buttons.b2','buttons.b5','buttons.b8','O wins!');
    throw new Error();
  }
  else if(lib.btn3.value=="X" && lib.btn6.value=="X" && lib.btn9.value=="X"){
    alertbox_gameEnd('buttons.b3','buttons.b6','buttons.b9','X wins!');
    throw new Error();
  }
  else if(lib.btn3.value=="O" && lib.btn6.value=="O" && lib.btn9.value=="O"){
    alertbox_gameEnd('buttons.b3','buttons.b6','buttons.b9','O wins!');
    throw new Error();
  }
  else if(lib.btn3.value=="X" && lib.btn5.value=="X" && lib.btn7.value=="X"){
    alertbox_gameEnd('buttons.b3','buttons.b5','buttons.b7','X wins!');
    throw new Error(); 
  }
  else if(lib.btn3.value=="O" && lib.btn5.value=="O" && lib.btn7.value=="O"){
    alertbox_gameEnd('buttons.b3','buttons.b5','buttons.b7','O wins!');
    throw new Error();
  }
  //If no one wins yet table is full, then display the following
  else if(a==9){
    let itsatie=document.createTextNode("It's a tie lool");
    let tietext=document.createTextNode(itsatie);
    lib.plyWin.appendChild(tietext);
    lib.gameBoxEnd.style.display='block';
    lib.plyWin.style.display='block';
    lib.rstbtn.style.display='block';  
  }
});

//Clicking on logo takes back to main menu
lib.goMainMenu.addEventListener('click',function(){
  window.location='index.html';
});
import * as lib from "./library.js";

//Counter to determine if there is a tie
let a=0;

//Alternate between X and O
const whosTurn=document.getElementById('whoTurn');

//get bgcolor cookie
const bgColor=localStorage.getItem('theme');

//Different color for X and O
let xcolor,ocolor;


//document.getElementById('GameEndBoxID').style.display='none';

//Get a cookie of the page background color so that it opens with that color
//when after we close the page (saves the color if it doesn't exist yet as a cookie)
const theme=localStorage.getItem('theme');
if(theme){
  document.body.classList.add(theme);
}

//Call function to set colors of X and O based on bgColor
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

//Sleep for specified time for Computer choice
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

//Disable all buttons (that are empty) while waiting for O to make a move
function disableBtn(wtf,btnnum){
  for(const i in wtf){
    if(i!=btnnum){
      wtf[i].disabled=true;
    }
  }
}

//Enable all buttons that are empty after O made a move
function enableBtn(wtf,btnnum){
  for(const i in wtf){
    if(i!=btnnum){
      wtf[i].disabled=false;
    }
  }
}

//Computer/O's turn to make a move
function Computer_Turn(id_btn){
  //Text specifies it is O turn
  whosTurn.innerHTML="O turn";

  //Remove the id of X from the Object as it can no longer be used and disable the button
  console.log('PREMIER DELETE EST: '+id_btn);
  delete lib.wtf[id_btn];

  //Chose a random value from the Object
  let keys = Object.keys(lib.wtf);
  let rand=keys[ keys.length * Math.random() << 0];
  let valeur_rand=lib.wtf[rand];  
  console.log(valeur_rand+" est la valeur_rand!"+" mais le key="+rand); 
  
  //Set the color and value of O
  valeur_rand.style.color=ocolor;
  valeur_rand.value="O";
  valeur_rand.disabled=true;

  //Remove the id of O from the Object as it can no longer be used
  delete lib.wtf[rand];

  //Now it is X's turn to make a move
  whosTurn.innerHTML="X turn";
}


//Event listeners for each button in the table
lib.btn1.addEventListener("click", function(){
  //Counter
  a++;

  //Set value, color and disable X
  lib.btn1.style.color=xcolor;
  lib.btn1.value="X";
  lib.btn1.disabled=true;
  disableBtn(lib.wtf,"buttons.b1");

  //Verify if X is winner
  verify_winner();
  whosTurn.innerHTML="O turn";

  //wait for 900ms and then O makes a move
  sleep(900).then(() => {
    enableBtn(lib.wtf,"buttons.b1");
    Computer_Turn('buttons.b1');
  //Verify if O is winner
    verify_winner();
  }); 
  lib.btn1.disabled=true; 
});

lib.btn2.addEventListener("click", function(){
  a++;
  lib.btn2.style.color=xcolor;
  lib.btn2.value="X";
  disableBtn(lib.wtf,"buttons.b2");
  verify_winner();
  whosTurn.innerHTML="O turn";
  sleep(900).then(() => {
    enableBtn(lib.wtf,"buttons.b2");
    Computer_Turn("buttons.b2");
    verify_winner();
  });
  lib.btn2.disabled=true; 
});

lib.btn3.addEventListener("click",function(){
  a++;
  lib.btn3.style.color=xcolor;
  lib.btn3.value="X";
  disableBtn(lib.wtf,"buttons.b3");
  verify_winner();
  whosTurn.innerHTML="O turn";
  sleep(900).then(() => {
    enableBtn(lib.wtf,"buttons.b3");
    Computer_Turn("buttons.b3");
    verify_winner();
  });
  lib.btn3.disabled=true; 
});

lib.btn4.addEventListener("click",function(){
  a++;
  lib.btn4.style.color=xcolor;
  lib.btn4.value="X";
  disableBtn(lib.wtf,"buttons.b4");
  verify_winner();
  whosTurn.innerHTML="O turn";
  sleep(900).then(() => {
    enableBtn(lib.wtf,"buttons.b4");
    Computer_Turn("buttons.b4");
    verify_winner();
  });
  lib.btn4.disabled=true; 
});

lib.btn5.addEventListener("click",function(){
  a++;
  lib.btn5.style.color=xcolor;
  lib.btn5.value="X";
  disableBtn(lib.wtf,"buttons.b5");
  verify_winner();
  whosTurn.innerHTML="O turn";
  sleep(900).then(() => {
    enableBtn(lib.wtf,"buttons.b5");
    Computer_Turn("buttons.b5");
    verify_winner();
  });
  lib.btn5.disabled=true; 
});

lib.btn6.addEventListener("click",function(){
  a++;
  lib.btn6.style.color=xcolor;
  lib.btn6.value="X";
  disableBtn(lib.wtf,"buttons.b6");
  verify_winner();
  whosTurn.innerHTML="O turn";
  sleep(900).then(() => {
    enableBtn(lib.wtf,"buttons.b6");
    Computer_Turn("buttons.b6");
    verify_winner();
  });
  lib.btn6.disabled=true; 
});

lib.btn7.addEventListener("click",function(){
  a++;
  lib.btn7.style.color=xcolor;
  lib.btn7.value="X";
  disableBtn(lib.wtf,"buttons.b7");
  verify_winner();
  whosTurn.innerHTML="O turn";
  sleep(900).then(() => {
    enableBtn(lib.wtf,"buttons.b7");
    Computer_Turn("buttons.b7");
    verify_winner();
  });
  lib.btn7.disabled=true; 
});

lib.btn8.addEventListener("click",function(){
  a++;
  lib.btn8.style.color=xcolor;
  lib.btn8.value="X";
  disableBtn(lib.wtf,"buttons.b8");
  verify_winner();
  whosTurn.innerHTML="O turn";
  sleep(900).then(() => {
    enableBtn(lib.wtf,"buttons.b8");
    Computer_Turn("buttons.b8");
    verify_winner();
  });
  lib.btn8.disabled=true; 
});

lib.btn9.addEventListener("click",function(){
  a++;
  lib.btn9.style.color=xcolor;
  lib.btn9.value="X";
  disableBtn(lib.wtf,"buttons.b9");
  verify_winner();
  whosTurn.innerHTML="O turn";
  sleep(900).then(() => {
    enableBtn(lib.wtf,"buttons.b9");
    Computer_Turn("buttons.b9");
    verify_winner();
  });
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
  
  //When player/computer wins, disable all other buttons and transition to make them smaller
  for(let i in lib.btnclass){
    if(!(i==bx || i==by || i==bz)){
      lib.btnclass[i].style.transition='0.4s';
      lib.btnclass[i].style.opacity='0.3';
      lib.btnclass[i].style.transform='scale(0.7)';
    }
  }
}

//Reset btn when game ends (Play Again)
lib.rstbtn.addEventListener("click",function(){
  window.location.reload();
});

//Function to determine which combination of 3 Xs or 3 Os won
function verify_winner(){
  console.log(a+"      soit la longueur mon reuf");
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
  else if(a==5){
    let itsatie=document.createTextNode("It's a tie lool");
    let tietext=document.createTextNode(itsatie);
    lib.plyWin.appendChild(tietext);
    lib.gameBoxEnd.style.display='block';
    lib.plyWin.style.display='block';
    lib.rstbtn.style.display='block'; 
  }  
};
//Clicking on logo takes back to main menu
lib.goMainMenu.addEventListener('click',function(){
  window.location='index.html';
});
//Buttons and divs
export let rstbtn=document.getElementById("reset");
export let plyWin=document.getElementById("playerWin");
export let goMainMenu=document.getElementById('MainMenu');
export let gameBoxEnd=document.getElementById('GameEndBoxID');

//Object of all buttons in the tictactoe table
let buttons={
  b1:document.getElementById('b1'),
  b2:document.getElementById('b2'),
  b3:document.getElementById('b3'),
  b4:document.getElementById('b4'),
  b5:document.getElementById('b5'),
  b6:document.getElementById('b6'),
  b7:document.getElementById('b7'),
  b8:document.getElementById('b8'),
  b9:document.getElementById('b9')
};

//individual buttons for each value in object
export let btn1=buttons.b1;
export let btn2=buttons.b2;
export let btn3=buttons.b3;
export let btn4=buttons.b4;
export let btn5=buttons.b5;
export let btn6=buttons.b6;
export let btn7=buttons.b7;
export let btn8=buttons.b8;
export let btn9=buttons.b9;

//Object with string as key
export let wtf={"buttons.b1":btn1,
  "buttons.b2":btn2,
  "buttons.b3":btn3,
  "buttons.b4":btn4,
  "buttons.b5":btn5,
  "buttons.b6":btn6,
  "buttons.b7":btn7,
  "buttons.b8":btn8,
  "buttons.b9":btn9};

//Duplicate of wtf object from which we don't delete anything
export let btnclass={"buttons.b1":btn1,
  "buttons.b2":btn2,
  "buttons.b3":btn3,
  "buttons.b4":btn4,
  "buttons.b5":btn5,
  "buttons.b6":btn6,
  "buttons.b7":btn7,
  "buttons.b8":btn8,
  "buttons.b9":btn9};


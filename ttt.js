let audioTurn=new Audio("ting.mp3");
let box=document.getElementsByClassName("box");
let button=document.getElementById('reset');
let info=document.querySelector('.info');
let turn="X";

info.innerText="TURN FOR X";
let changeTurn=()=>{
    if(turn==="X"){
        info.innerText="TURN FOR O";
    }
    else if(turn==="O"){
        info.innerText="TURN FOR X";
    }
    return turn==="X"?"O":"X";
   
}

    let gameover=false;
    Array.from(box).forEach(element=>{
        let boxtext=element.querySelector(".boxtext");
        element.addEventListener('click', ()=>{
            if(gameover){
                return;
            }
            if(boxtext.innerText===''){
                boxtext.innerText=turn;
                turn=changeTurn();
                audioTurn.play();
                checkwin();
         
            }
    })
    });




const winningcombos=[
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // vertical

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // diagonal

    [0, 4, 8],
    [2, 4, 6]
  ];

  

  let checkwin = () => {
    winningcombos.forEach(combo => {
      const box1 = box[combo[0]].querySelector('.boxtext').innerText;
      const box2 = box[combo[1]].querySelector('.boxtext').innerText;
      const box3 = box[combo[2]].querySelector('.boxtext').innerText;
      if (box1 === box2 && box2 === box3 && box1 !== '') {
        info.innerText=`Player ${box1} won`;
        gameover=true;
      }
    });
  }

  let boxx=Array.from(box);
  button.addEventListener("click", () => {
   boxx.forEach(element=>{
    element.querySelector(".boxtext").innerText='';
    turn=changeTurn();
    gameover=false;
   })
   })




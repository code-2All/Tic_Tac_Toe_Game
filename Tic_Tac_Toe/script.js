let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container ");
let msg = document.querySelector("#msg");



//Aterernate tern comming  
let turn0 = true; //layer x, Player y

const winpatrn = 
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box Clicked");
        if(turn0){
            box.innerText = "0";
            turn0 =  false;
        }
        else{// Player x
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;// One time enter the value then again u cant  change  he value of the box

        checkWinner();
    });
});
const disableBox = ()  =>{
    for(let Box of boxes)
    {
        Box.disabled=true;
    }
}
const showwinner = (winner) =>{
    msg.innerText = `Congratulation! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};

const enableBox = ()  =>{
    for(let Box of boxes)
    {
        Box.disabled=false;
        Box.innerText = "";
    }
};

const resetGame = () =>{
    turn0 = true;
    enableBox();
    msgContainer.classList.add("hide");
}

const checkWinner = () =>{
    for(pattern of winpatrn)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3)
            {
                console.log("Congratulation! You are winner",pos1);
              
                showwinner(pos1);
            }
        }
       
    }
};
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);



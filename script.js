let msg = document.querySelector(".msg");
Player1 = prompt("Enter name of player1");
Player2 = prompt("Enter name of player2");
let odd = 1;
let row = document.querySelectorAll(".a");
let msgContainer = document.querySelector(".msgContainer");
let win1 = 0;
let win2 = 0;
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let j = 0;
let count = 0;
yours=document.querySelector(".yours");
comp=document.querySelector(".comp");
yours.innerText=`${Player1}`;
comp.innerText=`${Player2}`;
function showWinner() {
    const winnerPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6]];
    for (let pattern of winnerPatterns) {
        let a = row[pattern[0]].innerText;
        let b = row[pattern[1]].innerText;
        let c = row[pattern[2]].innerText;
        if (a !== "" && a === b && b === c) {
            if (a === "X") {
                win1++;
                msg.innerText = `${Player1} has won`;
                msg.style.background = "green";
                j = 1;
                
            }
            else if (a === "O") {
                win2++;
                msg.innerText = `${Player2} has won`;
                msg.style.background = "red";
                j = 1;
                
            }
            setTimeout(reset,1000);
            
        }

    }

}
function disableBoard(){
    if(j===1){
        row.forEach((p)=>{
            p.style.pointerEvents="none";
        })
    }
}
function draw() {
    if (j === 0 && count === 9) {
        msg.innerText = "game has draw!!";
        msg.style.background = "grey";
        msg.style.color = "black";
        setTimeout(reset,1000);
    }
    

}
function showScore() {
    score1.innerText = `${win1}`;
    score2.innerText = `${win2}`;
}
function reset() {
    if ((j === 0 && count === 9) || j === 1) {
        row.forEach((p) => {
            p.innerText = "";
            p.style.pointerEvents = "auto";
            j=0;
            count=0;
            odd=1;
        })
    }
}

row.forEach((r) => {
    r.addEventListener("click", () => {
        if (odd === 1) {
            odd = 0;
            // const choiceplayer1 = r.getAttribute("id");
            r.innerText = "X";
        } else {
            odd = 1;
            // const choiceplayer2 = r.getAttribute("id");
            r.innerText = "O";
        }
        count++;
        r.style.pointerEvents = "none";
        showWinner();
        disableBoard();
        draw();
        showScore();
        
    });

});
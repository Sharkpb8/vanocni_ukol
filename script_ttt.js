var whiteColor = "#FFFFFF";
var player = true;
var redColor = "#FF0000"
var blueColor = "#0000FF"
const Pole = ["","","", "","","", "","",""];
const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
var win = false;

function Tic(clickedDiv){
    if(!win){
    var divClass = String(".")+clickedDiv.classList[0];
    var poleIndex = divClass.substring(5);
    console.log(poleIndex);
    console.log(divClass);
    document.getElementById("wi").innerHTML = "";
    if(Pole[poleIndex-1]==""){
    if(player==true){
        document.querySelector(divClass).style["background-color"]= redColor;
        Pole[poleIndex-1] = "R";
        player=false;
        document.getElementById("np").innerHTML = "Next player is Blue";
    }else{
        document.querySelector(divClass).style["background-color"]= blueColor;
        Pole[poleIndex-1] = "B";
        player=true;
        document.getElementById("np").innerHTML = "Next player is Red";
    }
    }else{
        document.getElementById("wi").innerHTML = "Wrong pole";
    }
    console.log(Pole);
    winning();
    }
}

function winning(){
    for(let i =0;i<winCondition.length;i++){
        const condition = winCondition[i];
        const cellA = Pole[condition[0]];
        const cellB = Pole[condition[1]];
        const cellC = Pole[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }else if(cellA == cellB && cellB == cellC){
            win = true;
            break;
        }
    }
    if(win){
        if(player==true){
            document.getElementById("np").innerHTML = "Blue Won";
        }else{
            document.getElementById("np").innerHTML = "Red Won";
        }
        
    }
}

function restart(){
    for(let i =0;i<=8;i++){
        Pole[i] = "";
        var whiteRestart = ".cell"+(i+1);
        document.querySelector(whiteRestart).style["background-color"]= whiteColor;
    }
    win = false;
    if(player){
        document.getElementById("np").innerHTML = "Next player is Red";
    }else{
        document.getElementById("np").innerHTML = "Next player is Blue";
    }
}

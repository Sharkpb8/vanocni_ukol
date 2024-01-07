var ammount;
const colorList = [];
var winner;
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

function generate_color(){
    var letters = "0123456789ABCDEF"; 
    var color = '#';
    var classid = ".circle";
    
    for(let i = 1;i<=ammount;i++){
        var idIncrease = classid+String(i);
        for(let i = 0; i<6;i++){
            color += letters[(Math.floor(Math.random() * 16))]; 
        }
        colorList.push(color);
        console.log(idIncrease);
        console.log(color);
        document.querySelector(idIncrease).style["background-color"]= color;
        color = "#";
    }
    for(let i = ammount+1;i<=10;i++){
        var toWhite = classid+String(i);
        document.querySelector(toWhite).style["background-color"]= whiteColor;
    }
    var random = Math.floor(Math.random()* ammount);
    winner = colorList[random]
    console.log(random);
    console.log(winner);
    document.getElementById("gc").innerHTML = "What circle is "+ winner;
}

function ammountpicker2(){
    ammount = 2;
    generate_color();
}

function ammountpicker3(){
    ammount = 3;
    generate_color();
}

function ammountpicker4(){
    ammount = 4;
    generate_color();
}

function ammountpicker5(){
    ammount = 5;
    generate_color();
}

function ammountpicker6(){
    ammount = 6;
    generate_color();
}

function ammountpicker7(){
    ammount = 7;
    generate_color();
}

function ammountpicker8(){
    ammount = 8;
    generate_color();
}

function ammountpicker9(){
    ammount = 9;
    generate_color();
}

function ammountpicker10(){
    ammount = 10;
    generate_color();
}

function check1(){
    if(colorList[0]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[0];
        document.querySelector(".circle1").style["background-color"]= whiteColor;
    }
}

function check2(){
    if(colorList[1]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[1];
        document.querySelector(".circle2").style["background-color"]= whiteColor;
    }
}

function check3(){
    if(colorList[2]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[2];
        document.querySelector(".circle3").style["background-color"]= whiteColor;
    }
}

function check4(){
    if(colorList[3]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[3];
        document.querySelector(".circle4").style["background-color"]= whiteColor;
    }
}

function check5(){
    if(colorList[4]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[4];
        document.querySelector(".circle5").style["background-color"]= whiteColor;
    }
}

function check6(){
    if(colorList[5]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[5];
        document.querySelector(".circle6").style["background-color"]= whiteColor;
    }
}

function check7(){
    if(colorList[6]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[6];
        document.querySelector(".circle7").style["background-color"]= whiteColor;
    }
}

function check8(){
    if(colorList[7]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[7];
        document.querySelector(".circle8").style["background-color"]= whiteColor;
    }
}

function check9(){
    if(colorList[8]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[8];
        document.querySelector(".circle9").style["background-color"]= whiteColor;
    }
}

function check10(){
    if(colorList[9]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[9];
        document.querySelector(".circle10").style["background-color"]= whiteColor;
    }
}


function Tic(clickedDiv){
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

function winning(){
    let Win = false;
    for(let i =0;i<winCondition.length;i++){
        const condition = winCondition[i];
        const cellA = Pole[condition[0]];
        const cellB = Pole[condition[1]];
        const cellC = Pole[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }else if(cellA == cellB && cellB == cellC){
            Win = true;
            break;
        }
    }
    if(Win){
        if(player==true){
            document.getElementById("np").innerHTML = "Blue Won";
        }else{
            document.getElementById("np").innerHTML = "Red Won";
        }
        
    }
}

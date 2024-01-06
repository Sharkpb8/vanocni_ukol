var ammount;
const colorList = [];
var winner;

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
    var random = Math.floor(Math.random()* ammount);
    winner = colorList[random]
    console.log(random);
    console.log(winner);
    document.getElementById("gc").innerHTML = "What circle is "+ winner;

}

function ammountpicker2(){
    ammount = 2;
}

function ammountpicker3(){
    ammount = 3;
}

function ammountpicker4(){
    ammount = 4;
}

function ammountpicker5(){
    ammount = 5;
}

function ammountpicker6(){
    ammount = 6;
}

function ammountpicker7(){
    ammount = 7;
}

function ammountpicker8(){
    ammount = 8;
}

function ammountpicker9(){
    ammount = 9;
}

function ammountpicker10(){
    ammount = 10;
}

function check1(){
    if(colorList[0]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong";
    }
}

function check2(){
    if(colorList[1]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong";
    }
}

function check3(){
    if(colorList[2]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong";
    }
}

function check4(){
    if(colorList[3]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong";
    }
}

function check5(){
    if(colorList[4]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong";
    }
}

function check6(){
    if(colorList[5]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong";
    }
}

function check7(){
    if(colorList[6]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong";
    }
}

function check8(){
    if(colorList[7]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong";
    }
}

function check9(){
    if(colorList[8]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong";
    }
}

function check10(){
    if(colorList[9]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong";
    }
}

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
    }
}

function check2(){
    if(colorList[1]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[1];
    }
}

function check3(){
    if(colorList[2]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[2];
    }
}

function check4(){
    if(colorList[3]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[3];
    }
}

function check5(){
    if(colorList[4]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[4];
    }
}

function check6(){
    if(colorList[5]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[5];
    }
}

function check7(){
    if(colorList[6]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[6];
    }
}

function check8(){
    if(colorList[7]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[7];
    }
}

function check9(){
    if(colorList[8]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[8];
    }
}

function check10(){
    if(colorList[9]==winner){
        document.getElementById("an").innerHTML = "correct";
        generate_color();
    }else{
        document.getElementById("an").innerHTML = "Wrong This is "+colorList[9];
    }
}

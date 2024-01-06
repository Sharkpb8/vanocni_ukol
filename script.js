var ammount;

function generate_color(){
    var letters = "0123456789ABCDEF"; 
    var color = '#';
    var classid = ".circle";
    
    for(let i = 1;i<=ammount;i++){
        var idIncrease = classid+String(i);
        for(let i = 0; i<6;i++){
            color += letters[(Math.floor(Math.random() * 16))]; 
        }
        console.log(idIncrease);
        console.log(color);
        document.querySelector(idIncrease).style["background-color"]= color;
        color = "#";
    }
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

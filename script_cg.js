var ammount;
const colorList = [];
var winner;
var whiteColor = "#FFFFFF";
var ulList = document.getElementById("circleList");

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
    let random = Math.floor(Math.random()* ammount);
    winner = colorList[random]
    console.log(random);
    console.log(winner);
    document.getElementById("gc").innerHTML = "What circle is "+ winner;
}

function createli(){
    for(let i =1;i<=ammount;i++){
        let newLi = document.createElement("li");
        let cirkleadd = "circle"+String(i);
        newLi.className = cirkleadd;
        newLi.onclick = function() {
            if(colorList[i]==winner){
                document.getElementById("an").innerHTML = "correct";
                generate_color();
            }else{
                document.getElementById("an").innerHTML = "Wrong This is "+colorList[i];
                document.querySelector("."+cirkleadd).style["background-color"]= whiteColor;
            }
        };
        ulList.appendChild(newLi);
    }
}

function deleteli(){
    while (ulList.firstChild) {
        ulList.removeChild(ulList.firstChild);
    }
}

function ammountpick(ammountid){
    ammount = ammountid;
    deleteli()
    createli()
    generate_color();
}
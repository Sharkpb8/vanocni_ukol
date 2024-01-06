function generate_color(){
    var letters = "0123456789ABCDEF"; 
    var color = '#';
    var classid = ".circle";
    var ammount =  document.getElementById("numbeOfCircles").value;
    /* for(let i = 0; i<6;i++){
        color += letters[(Math.floor(Math.random() * 16))]; 
    } */
    
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

    document.querySelector(".circle1").style["background-color"]= color;
    
}
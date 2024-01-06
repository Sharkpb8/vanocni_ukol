function generate_color(){
    var letters = "0123456789ABCDEF"; 
    var color = '#';
    var classid = ".circle"; 
    for(let i = 0; i<6;i++){
        color += letters[(Math.floor(Math.random() * 16))]; 
    }
    document.getElementById("rc").innerHTML = color;
    /* for(let i = 0;i<9;i++){
        let idincrease = classid+i;
        console.log(idincrease);
        document.querySelector(idincrease).style["background-color"]= color;
    } */

    document.querySelector(".circle1").style["background-color"]= color;
    
}
var messagetoD = "David How are you today ? I hope you enjoy rest of the weekend and I will be missing you so much 😘😘😘♥";
var message = messagetoD.split(" ");
var i = 0;
var secondsLeft = 5; 

var countDown = document.querySelector("#countDown");
var messagePlace = document.querySelector("#messagePlace");

var mainElmt =document.querySelector("#main")
var imgElmt = document.createElement("img");

var millisecondsperWord = prompt("How many Milliseconds between words would you like to read-just enter 1000");



function prepareRead(){
    var secondsLeft = 5; 

    var messageCount = setInterval(function(){

        countDown.textContent = secondsLeft + " remaining! "
        secondsLeft--;

    if (secondsLeft === 0) {
        countDown.textContent = "";
        clearInterval(messageCount); 
        messageRead();      
    

}

},1000);

}


function messageRead(){
   

    var davidRead = setInterval(function(){
        if (message[i]===undefined){
            clearInterval(davidRead);
            var imgElmt = document.createElement("img");
            imgElmt.setAttribute("src","SweetHeart.jpg")
            mainElmt.appendChild(imgElmt);
        }
        else{
       
        messagePlace.textContent =message[i];
        i++;
    }

    },millisecondsperWord);
}

// function sendMessage(){

//     var imgElmt = document.createElement("img");
//     imgElmt.setAttribute("src","SweetHeart.jpg")
//     mainElmt.appendChild(imgElmt);

// }

prepareRead();
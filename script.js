// //Javascript prompt() function

// let number=prompt("Enter the number");//js functionality to get user input

// let name=prompt("my Name # ")

// for(let i=1; i<=10; i++){

//     let result=number*i;
//     document.write(result)
// }

// document.write(name)

//confirm box
//its a js function
//confirm is a js functionality which pops up a dialog box with ok and cancel associated with it.
//iif you clickOK the it is true else it is FALSE

// let ayush=confirm("who am i")

// let data=confirm("it is RED Color?")

// if(confirm(data)==true){
//     alert("it is a RED Color Box !");
// }
// else{
//     alert("different color !")
// }


//what if you need to call a function after a specific time

// function suman(){
//     document.write("Suman Gangopadhay")
// }

// // suman()

// setTimeout(suman,10000)// these are callback function-->are function which call a function

// ---------------------//

// "use strict";

// function Ayush(){
//     let date=new Date();
//     let hours=date.getHours();
//     let minute=date.getMinutes();
//     let seconds=date.getSeconds();
//     let period="AM";
//     if(hours==0){
//         hours=10;

//     }
//     else if(hours>=12){
// hours=hours-12;
// period="PM"
//     }
//     // data= hours + ":"+ minutes + ":"+ seconds + " " + period;
//     document.getElementById("clock").innerHTML= hours + ":"+ minutes + ":"+ seconds + " " + period;;
//     setTimeout(Ayush,1000)

// }
// Ayush()
// ---------------------------------------------------//

//setInterval ()

// setInterval(function(){
//     document.write("Suman");
// },2000);

// Example for setInterval() functiona

// "use strict";

// let seconds=0;
// let minutes=0;
// let interval=0;
// let minutes_value=cocument.getElementById("minute");
// let seconds_value=document.getElementById("seconds");
// let start_button=document.getElementById("start");
// let stop_button=document.getElementById("stop");
// let reset_button=document.getElementById("reset");


// function Ayush(){
//     minutes++;
//     if(minutes<9){
//         minutes_value.innerHTML="0"; 
//     }
//     if(minutes>9){
// minutes_value.innerHTML=minutes;
//     }
//     if(minutes>99){
//         seconds++;
//        seconds_value.innerhtml="0"+seconds;
//        minutes=0;
//        minutes_value.innerHTML="0"+0;

//     }
//     if(seconds>9){
//         seconds_value.innerHTML=seconds;
//     }
//     start_button.onclick=function(){
//         interval=setInterval(Ayush);
//     };
//     stop_button.onclick=function(){clearInterval(interval);}

// reset_button.onclick=function(){
//     clearInterval(interval);
//     minutes="00";
//     seconds="00";
//     seconds_value.innerHTML=seconds;
//     minutes_value.innerHTML=minutes;
// }


// }



//FIRSE

//Javascript Prompt() function
// "use strict";
// // prompt is a function is used get input from the user from javascript functionality not from html

// let number=prompt("Enter the number")//javascript functionalit to get userinput

// let name=prompt("your name")

// for(let i=1;i<=10;i++){
// let result=number*i;
// document.write(result+" ")
// }

// document.write(name)


//confirm box
//it is a javascript function dialogue box pop on scree which has okk and cancel button 

const suman=require( confirm())
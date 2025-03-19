function completeBtn(){
    let buttons = document.getElementsByClassName("completeBtn");
    //console.log("yes button is clicekd");
    



    for (let i = 0 ; i< buttons.length; i++){
        buttons[i].addEventListener('click', function(event){
            alert("Board updated successfully");
           

            event.preventDefault();// need to fix this 

            //task number discrease

            let counterOne =  document.getElementById("counterOne");

            let countElement = parseInt(counterOne.innerText);

            let countDown = countElement-1;

            counterOne.innerText = "0"+countDown;
            this.disabled = true ;

            //update check box

            let checkBox =document.getElementById("checkBox");
            let checkBoxElement = parseInt(checkBox.innerText);

            let plusCheckBox = checkBoxElement+1;
            checkBox.innerText= plusCheckBox;







           //current time add
            let now = new Date();
            let hours= now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();

            let amPm = hours >=12 ? "PM":"AM" ;
            // condition ? vaule if true : value if false;
            hours = hours % 12 || 12;

            let formateTime = `${hours}:${minutes < 10 ? "0" : " "}${minutes}: ${seconds <10 ? "0": "" }${seconds} ${amPm}`;
           //title value
           let taskTitle= this.closest('.taskContainer').querySelector(".btnTitle").innerText;
            //add new p tag in activithy log

            let p = document.createElement("p");
            p.classList.add("text-gray-600");
          
            p.innerText = `  you have completed task "${taskTitle}" at ${formateTime}`;
            


            let activityLog = document.getElementById("activityLog");
            activityLog.appendChild(p);
            //make activity log visible
            if (activityLog.style.visibility  === "hidden") {
                activityLog.style.visibility = "visible";
            }

            //give last alert
            let allDisabled = true;
            for (let j=0 ; j<buttons.length; j++){
                if(!buttons[j].disabled){
                    allDisabled=false;
                    break;
                }
            }
            if(allDisabled){
                alert("you have completed");
            }


        }) ;
    }
    
}

completeBtn();

/*document.getElementById("themBtn").addEventListener('click', function(){
    //console.log("theme button clicked")
    


})*/

/* theme button */
document.getElementById("themeBtn").addEventListener("click", function(){
    console.log("button clicked")
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
// back to main page




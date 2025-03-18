function completeBtn(){
    let buttons = document.getElementsByClassName("completeBtn");
    //console.log("yes button is clicekd");



    for (let i = 0 ; i< buttons.length; i++){
        buttons[i].addEventListener('click', function(event){
            alert("Board updated successfully");

            event.preventDefault();// need to fix this 

            let counterOne =  document.getElementById("counterOne");

            let countElement = parseInt(counterOne.innerText);

            let countDown = countElement-1;

            counterOne.innerText = "0"+countDown;
            this.disabled = true ;




        })
    }
}
let button = completeBtn();

/*document.getElementById("themBtn").addEventListener('click', function(){
    //console.log("theme button clicked")
    


})*/

/* theme button */
document.getElementById("themeBtn").addEventListener("click", function(){
    console.log("button clicked")
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});



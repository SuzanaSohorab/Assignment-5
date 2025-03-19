document.addEventListener('DOMContentLoaded',function( ) {

    
    let date = document.getElementById("date");


    let today =  new Date();

    let dateStyle= {month :"short" , day:"numeric" , year:"numeric"};

    let formateDate = today.toLocaleDateString("en-Us" , dateStyle)
    date.innerText= formateDate;

    


})
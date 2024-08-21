var sidenav = document.querySelector(".side-navbar")


function showbar(){
    sidenav.style.left="0"
    

}

function closebar(){
    sidenav.style.left="-60%"
    
}



/* popup for shop */

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton =document.querySelectorAll(".add-popup")


    addbutton.forEach(addbutton =>{
        addbutton.addEventListener("click",function(){
            popupoverlay.style.display="block"
            popupbox.style.display="block"
        })
    })
    



var cancelbutton = document.getElementById("cancel-popup")


cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})


/*  for subscribe*/
var subpopup = document.getElementById("sub-popup")
var subpopoverlay = document.querySelector(".sub-popup-overlay")
var subpopbox = document.getElementById("successMessage")
var subbtn = document.getElementById("addsub")

subbtn.addEventListener("click",function(event){
    event.preventDefault()
    subpopup.style.display="block"
    subpopbox.classList.remove('hidden');
    subpopbox.classList.add('show');

    setTimeout(() => {
        subpopup.style.display="none"
    }, 3000); 
});


/* buy button */

var buybtn =document.getElementById("buy-book")
var popupmsg =document.getElementById("popup-msg")

buybtn.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    subpopup.style.display="block"
    subpopbox.classList.remove('hidden');
    subpopbox.classList.add('show');
    popupmsg.innerHTML = popupmsg.innerHTML.replace('Successfully Subscribed!',"Successfully Purchased!")


    setTimeout(() => {
        subpopup.style.display="none"
    }, 3000); 
    
});

var addbtn =document.getElementById("add-book")

    addbtn.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    subpopup.style.display="block"
    subpopbox.classList.remove('hidden');
    subpopbox.classList.add('show');
    popupmsg.innerHTML = popupmsg.innerHTML.replace('Successfully Subscribed!',"Successfully Added Your Cart!")


    setTimeout(() => {
        subpopup.style.display="none"
    }, 3000); 
    
});

var submit = document.querySelector(".contact-form-btn")

    submit.addEventListener("click",function(event){
    event.preventDefault();
    subpopup.style.display="block"
    subpopbox.classList.remove('hidden');
    subpopbox.classList.add('show');
    popupmsg.innerHTML = popupmsg.innerHTML.replace('Successfully Subscribed!',"Submited Successfully!")


    setTimeout(() => {
        subpopup.style.display="none"
    }, 3000); 

    })
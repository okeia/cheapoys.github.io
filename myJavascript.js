$  = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

//buyticket
var buyTicketElements = $$(".js-tour-btn");
var closeElement = $(".modal-close-icon");
var modalElement = $("#modal");
var modalContainer = $(".modal-container");
for(var buyTicketElement of buyTicketElements)
{
    buyTicketElement.addEventListener("click", function(){
        modalElement.classList.add("open")
    })
}
modalElement.addEventListener("click", function(){
    modalElement.classList.remove("open");
})
closeElement.onclick = function(){
    modalElement.classList.remove("open");
}
modalContainer.addEventListener("click", function(e){
    e.stopPropagation();
})
//Mobile menu button
const menuBtn = $(".mobile-menu")
const nav = $("#nav>li>a")
const header = $("#header")
const href =$$("#nav>li>a")
const main = $('#main')
menuBtn.addEventListener("click", function(e){
    if(nav.clientHeight ==header.clientHeight)
    {
      header.style.height = "auto"
      console.log(nav.clientHeight)
    }
    else{
        header.style.height= null;    
    }
})

   for(k=0; k<(href.length-1);k++){
    href[k].onclick = function()
    {       
     header.style.height= null; 
    }
   } 
console.log([href])
href[href.length-1].onclick = function(e){
    e.preventDefault()
}
main.addEventListener("click", function(){
    header.style.height= null; 
})
header.addEventListener("click", function(e){
    e.stopPropagation();
})
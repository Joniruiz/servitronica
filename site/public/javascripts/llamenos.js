
window.addEventListener("scroll", () => {
    if(window.scrollY >= 2600){
       document.querySelector(".llamenos").style.display= "none"  
   }else {
       document.querySelector(".llamenos").style.display="flex"
     
   }
   
  })
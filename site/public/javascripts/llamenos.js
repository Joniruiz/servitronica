let _llamemos = document.querySelector(".llamenos")
let _menuMobile = document.querySelector(".menuMobile")
let _hamburger = document.querySelector(".hamburger")



window.addEventListener("scroll", () => {
    if(window.scrollY >= 2700){
        _llamemos.style.display= "none"
       if (_menuMobile.classList.contains("deploy")) {
        _menuMobile.classList.remove("deploy")
        _menuMobile.classList.add("hidden")
        _hamburger.classList.remove("is-active")
       }
      
   }else {
        _llamemos.style.display="flex"
   }
   
  })
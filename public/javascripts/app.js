window.addEventListener("load",() => {
    let hamburger = document.querySelector(".hamburger");
    let menuMobile = document.querySelector(".menuMobile")
     
    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
        menuMobile.classList.toggle("hidden");
        menuMobile.classList.toggle("deploy");
    });
   
})
const hamburger = document.querySelector(".hamburger-Menu")

const navLinks = document.querySelector(".navbar-Menu")

// letting js know for each click/attraction the image will toggle on/off
hamburger.addEventListener("click",()=>{

  navLinks.classList.toggle("hidden")

})
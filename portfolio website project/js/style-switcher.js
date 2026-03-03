/* ======================== toggle style-switcher ======================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler")
let switcher =  document.querySelector(".style-switcher").classList;
styleSwitcherToggle.addEventListener("click",()=>{
   switcher // it is add .open class at let switcher or remove this .open class ex = .style-switcher -> .style-switcher .open
    switcher.toggle("open");                                                                                                                                            // .style-switcher .open -> .style-switcher
    
})

// hide switcher on scroll
window.addEventListener("scroll",()=>{
    if(switcher.contains("open"))
    {
        switcher.remove("open")
    }

})

/* ======================== Theme Colors  ======================== */

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled")
        }
        else
        {
            style.setAttribute("disabled","true")
        }
    })
}

/* ======================== Light And Dark Mode  ======================== */

const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})

window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")

    }
})
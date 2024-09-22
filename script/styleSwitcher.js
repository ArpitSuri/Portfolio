// toggle style switcher

const styleSwitcherToggle=document.querySelector(".styleSwitcherToggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".styleSwitcher").classList.toggle("open");
})

// hide style switcher on scroll

window.addEventListener("scroll",()=>{
    if(document.querySelector(".styleSwitcher").classList.contains("open")){
        document.querySelector(".styleSwitcher").classList.remove("open"); 
    }
})

// theme colors

const alernateStyle=document.querySelectorAll(".alernateStyle");
function setActiveStyle(color){
    alernateStyle.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })

}

// theme light and dark
const dyNight=document.querySelector(".day-night");
dyNight.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
})
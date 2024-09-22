// typing Animation
var typed = new Typed(".typing",{
    strings:["","ENTREPRENEUR","MERN STACK DEVELOPER","HACKTHON TEAM LEADER","MARTIAL ARTS ENTHUSIAST" ,"GAMER . . ."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// Aside

const nav=document.querySelector(".nav"),
        navList= nav.querySelectorAll("li"),
        totalNavList=navList.length,
        allSection=document.querySelectorAll(".section"),
        totalSection=allSection.length;
        for(let i=0;i<totalNavList;i++){
               
            const a=navList[i].querySelector("a");
            a.addEventListener("click",function(){
                for(let i=0;i<totalSection ; i++){
                    allSection[i].classList.remove("back_section");
                }
                for(let j=0; j<totalNavList; j++){
                    if(navList[j].querySelector("a").classList.contains("active")){
                        allSection[j].classList.add("back_section");
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active");
                showSection(this);
                if(window.innerWidth <1200 ){
                    asideSectionTogglerBtn();
                }
            })
}

function showSection(element){
    for(let i=0;i<totalSection ; i++){
        allSection[i].classList.remove("active");
    }
    const target =element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}


const navTogglerBtn = document.querySelector(".nav_toggler"),
    aside=document.querySelector(".aside");
    navTogglerBtn.addEventListener("click",()=>{
        asideSectionTogglerBtn()
    })

    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0;i<totalSection ; i++){
            allSection[i].classList.toggle("open");
        }
    }
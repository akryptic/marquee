let menuIcon = document.querySelector(".menuIcon");
let menuCont = document.querySelector(".menuCont");
let wrapper = document.querySelector(".wrapper");
let hero = document.querySelector(".hero");
let motionCursor = document.querySelector(".motionCursor");
let bluedot = document.querySelector(".bluedot");
let body = document.body;
let playground = document.querySelector(".playJS");
let innerText = document.querySelector(".innerText")
let box = document.querySelectorAll(".box");
let boxOverlay = document.querySelectorAll(".boxOverlay");


motionCursor.style.display = "none" ;
bluedot.style.display = "none";


let flag = false;

menuIcon.addEventListener("click", () =>{
    if(flag == false){
        menuCont.style.top = "0"
        menuCont.style.left = "0"
        menuCont.style.transform = "rotate(0deg)"
        wrapper.style.transform =  "rotate(10deg) translate(100%, -200%)"
        menuIcon.textContent = "CLOSE"

        flag = true;
    }else{
        menuCont.style.top = "-1200px"
        menuCont.style.left = "0"
        menuCont.style.transform = "rotate(10deg)"
         wrapper.style.transform =  "rotate(0deg) translate(0px, 0px)"
        menuIcon.textContent = "MENU"
        flag = false;
    }

})

let flagHero = true;

hero.addEventListener("mousemove", (e) => {
    motionCursor.style.left = e.clientX + 25 + "px"
    motionCursor.style.top = e.clientY+ 25 + "px"
    motionCursor.style.display = "block";
    bluedot.style.opacity = "0"
})

body.addEventListener("mousemove", (e)=>{
    if(flagHero == false){
        bluedot.style.display = "block";
        bluedot.style.left = e.clientX + 25 +"px";
        bluedot.style.top = e.clientY + 25 + "px";
    }
    
})

hero.addEventListener("mouseenter", () =>{
    flagHero = true;
    motionCursor.style.display = "block"
    bluedot.style.display = "none"
})

hero.addEventListener("mouseleave", ()=>{
    flagHero = false;
    motionCursor.style.display = "none"
    bluedot.style.display = "block"
    bluedot.style.opacity = "1"
})

playground.addEventListener("mouseenter",()=>{
    innerText.textContent = "Portfolio"
    bluedot.style.height = "auto"
    bluedot.style.width = "auto"
    bluedot.style.borderRadius = "10px";
    bluedot.style.paddingTop = "10px";
    bluedot.style.paddingBottom = "10px";
    bluedot.style.paddingRight = "10px";
    bluedot.style.paddingLeft = "10px";
    bluedot.style.transform = "rotate(-6deg)"
})

playground.addEventListener("mouseleave",()=>{
    innerText.textContent = "";
    bluedot.style.height = "16px"
    bluedot.style.width = "16px"
    bluedot.style.borderRadius = "100%";
    bluedot.style.padding = "0px";
    bluedot.style.transform = "rotate(0deg)"
})

console.log(box);

box.forEach((e,i) => {
    e.addEventListener("mouseenter",()=>{
        boxOverlay.forEach((overlay,j) =>{
            if(i == j){
                overlay.style.display = "flex";
            }
        })
        bluedot.style.height = "auto"
        bluedot.style.width = "auto"
        bluedot.style.borderRadius = "10px";
        bluedot.style.paddingTop = "10px";
        bluedot.style.paddingBottom = "10px";
        bluedot.style.paddingRight = "10px";
        bluedot.style.paddingLeft = "10px";
        bluedot.style.transform = "rotate(-6deg)"

        if(i == 0){
            innerText.textContent = "Matera"
        }else if(i == 1){
            innerText.textContent = "Chance"
        }else if(i == 2){
            innerText.textContent = "Silvr"
        }else{
            innerText.textContent = "Intramuros"
        }
    })


    e.addEventListener("mouseleave",()=>{
        boxOverlay.forEach((overlay,j) =>{
            if(i == j){
                overlay.style.display = "none";
            }

            innerText.textContent = "";
            bluedot.style.height = "16px"
            bluedot.style.width = "16px"
            bluedot.style.borderRadius = "100%";
            bluedot.style.padding = "0px";
            bluedot.style.transform = "rotate(0deg)"
        })
    })
});

let hoverVideo = document.querySelectorAll(".videoService");
let serviceText = document.querySelectorAll(".serviceText");
let serviceSmallText = document.querySelectorAll(".serviceSmallText");
let servicesBig = document.querySelectorAll(".servicesBig");


serviceText.forEach((e,i) => {
    e.addEventListener("mouseenter",()=>{
        hoverVideo.forEach((v,j) =>{
            if(i == j){
                v.style.height = "270px";
                v.style.opacity = "1";
                v.style.transition = "all linear 0.4s";

            }
        })

        serviceSmallText.forEach((t,j) => {
            if(i == j){
                t.style.opacity = "1";
            }
        })

        servicesBig.forEach((bT, j) => {
            if(i != j){
                bT.style.color = "#C4C4C4";
                bT.style.transition = "all ease 0.3s";
            }
        })
    })
})

serviceText.forEach((e,i) => {
    e.addEventListener("mouseleave",()=>{
        hoverVideo.forEach((v,j) =>{
            if(i == j){
                v.style.height = "0";
                v.style.opacity = "0";
                v.style.transition = "none";
            }
        })

        serviceSmallText.forEach((t,j) => {
            if(i == j){
                t.style.opacity = "0";
            }
        })

        servicesBig.forEach((bT, j) => {
            if(i != j){
                bT.style.color = "black";
                bT.style.transition = "all ease 0.3s";
            }
        })
    })
})


let seeAll = document.querySelector(".seeAll");
let seeArrow = document.querySelector(".seeArrow");


seeAll.addEventListener("mouseenter", ()=>{
    seeArrow.style.transform = "translateX(6px)";
    bluedot.style.height = "auto"
    bluedot.style.width = "auto"
    bluedot.style.borderRadius = "10px";
    bluedot.style.paddingTop = "10px";
    bluedot.style.paddingBottom = "10px";
    bluedot.style.paddingRight = "10px";
    bluedot.style.paddingLeft = "10px";
    bluedot.style.transform = "rotate(-6deg)"
    innerText.textContent = "Services"
})

seeAll.addEventListener("mouseleave", ()=>{
    seeArrow.style.transform = "translateX(0px)";
    innerText.textContent = "";
    bluedot.style.height = "16px"
    bluedot.style.width = "16px"
    bluedot.style.borderRadius = "100%";
    bluedot.style.padding = "0px";
    bluedot.style.transform = "rotate(0deg)"
})


let talkBtnTxt = document.querySelector(".talkBtnTxt");
let talkseeArrow = document.querySelector(".talkseeArrow");


talkBtnTxt.addEventListener("mouseenter", ()=>{
    talkseeArrow.style.transform = "translateX(6px)";
    bluedot.style.height = "auto"
    bluedot.style.width = "auto"
    bluedot.style.borderRadius = "10px";
    bluedot.style.paddingTop = "10px";
    bluedot.style.paddingBottom = "10px";
    bluedot.style.paddingRight = "10px";
    bluedot.style.paddingLeft = "10px";
    bluedot.style.transform = "rotate(-6deg)"
    innerText.textContent = "Let's Talk"
})

talkBtnTxt.addEventListener("mouseleave", ()=>{
    talkseeArrow.style.transform = "translateX(0px)";
    innerText.textContent = "";
    bluedot.style.height = "16px"
    bluedot.style.width = "16px"
    bluedot.style.borderRadius = "100%";
    bluedot.style.padding = "0px";
    bluedot.style.transform = "rotate(0deg)"
})


let footDotHover = document.querySelector(".footDotHover");



footDotHover.addEventListener("mouseenter", ()=>{
    bluedot.style.height = "auto"
    bluedot.style.width = "auto"
    bluedot.style.borderRadius = "10px";
    bluedot.style.paddingTop = "10px";
    bluedot.style.paddingBottom = "10px";
    bluedot.style.paddingRight = "10px";
    bluedot.style.paddingLeft = "10px";
    bluedot.style.transform = "rotate(-6deg)"
    innerText.textContent = "Send Love"
})

footDotHover.addEventListener("mouseleave", ()=>{
    innerText.textContent = "";
    bluedot.style.height = "16px"
    bluedot.style.width = "16px"
    bluedot.style.borderRadius = "100%";
    bluedot.style.padding = "0px";
    bluedot.style.transform = "rotate(0deg)"
})


let hoverTxt = document.querySelector(".un1")

hoverTxt.addEventListener("mouseenter",()=>{
    
})
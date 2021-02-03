let fylo = document.querySelector(".header-logo");
let fylo_img = document.querySelector(".header-logo img");
let nav = document.querySelector("nav"); 
let aside = document.querySelector("aside");
let close = document.getElementById("close");

let showControl = false;
let resizeConrol = true;

window.addEventListener('resize', function(){
    if(window.innerWidth == 375){
        fylo_img.style.width = "80px"
        resizeConrol = false;
    }else if(window.innerWidth > 375 && window.scrollY == 0){
        fylo_img.style.width = "initial"
        resizeConrol = true;
    }

    console.log(window.innerWidth)
})

window.addEventListener("scroll" , function(){
    if(resizeConrol == true){

        if(window.scrollY > 0){
            fylo_img.style.width = "60px"
            fylo_img.title = 'open menu';

            fylo.style.marginLeft = "84%";
            fylo.style.transition = "all 1.2s";
            fylo.style.position = "fixed";
            fylo.style.cursor = "pointer";
            fylo.title = 'open menu';
            
            nav.style.display = "none";
        
            fylo.classList.add("scroll");
            showControl = true;
        }else if(window.scrollY == 0){
            fylo.classList.remove("scroll");
    
            fylo_img.style.width = "initial"
    
            fylo_img.title = 'flyo.com';
    
            fylo.style.marginLeft = "0%";
            fylo.style.position = "static";
            fylo.style.opacity = "1";
            
            nav.style.display = "block";
            aside.style.marginRight = "0%";
            fylo.style.cursor = "auto";

            showControl = false;  
        }

    }
})

function show(a){
    if(showControl == true){
        if(a == "logoShow"){
            aside.style.marginRight = "25%";
            aside.style.transition = "all 1.5s";
            fylo.style.opacity = "0";
            fylo.style.cursor = "auto";

        }else if(a == "close"){
            aside.style.marginRight = "0%";
            fylo.style.opacity = "1";
            fylo.style.cursor = "pointer";
        }
    }

}


//Menu mobile
var menu = document.getElementById("mobile-menu");
var icone = document.querySelector(".fa-bars");
var open = false;

icone.addEventListener("click",function(){
    if(open == false){
        menu.style.height = "175px";
        open = true;
    }else{
        menu.style.height = "0px";
        open = false;
    }
})

//Slider de depoimentos
var autor = document.querySelectorAll(".autor-container");
var dots = document.querySelectorAll(".dot2");

dots[0].addEventListener("click", function(){
    dots[0].classList.add("active");
    dots[1].classList.remove("active");
    dots[2].classList.remove("active");
    autor[0].classList.remove("translate");
    autor[1].classList.remove("translate");
    autor[2].classList.remove("translate");
    autor[0].classList.remove("translate2");
    autor[1].classList.remove("translate2");
    autor[2].classList.remove("translate2");
})
dots[1].addEventListener("click", function(){
    dots[1].classList.add("active");
    dots[0].classList.remove("active");
    dots[2].classList.remove("active");
    autor[0].classList.add("translate");
    autor[1].classList.add("translate");
    autor[2].classList.add("translate");
})
dots[2].addEventListener("click", function(){
    dots[2].classList.add("active");
    dots[1].classList.remove("active");
    dots[0].classList.remove("active");
    autor[0].classList.remove("translate");
    autor[1].classList.remove("translate");
    autor[2].classList.remove("translate");
    autor[0].classList.add("translate2");
    autor[1].classList.add("translate2");
    autor[2].classList.add("translate2");
})
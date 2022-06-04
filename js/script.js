window.addEventListener("load",function(){


  AOS.init();

});




/*-------------------------------toggle navbar------------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",toggleNav);


function toggleNav(){ 
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");

};
/* close nav clicking on a nav item*/

document.addEventListener("click",function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});
/*-----------sticky header----------*/
window.addEventListener("scroll",function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");

    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
    
});

/*-------------menu tabs---------*/
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");  
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menusection = document.querySelector(".menu-section");
        menusection.querySelector(".menu-tab-content.active").classList.remove("active");
        menusection.querySelector(target).classList.add("active");
        // Animation on scroll
        AOS.init();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    function toggle(menuItem,btnclick,overlay){
        'use strict';
        const menu = document.querySelector(menuItem);
        const btnselect = document.querySelector(btnclick)
        const overlayMenu = document.querySelector(overlay);
        btnselect.addEventListener('click', ()=>{
            menu.classList.add("menu-active");
            overlayMenu.style.display = "block";
        });
    
        const removeScreen = ()=>{
            const close = document.querySelector('.nav-close-btn');
            close.addEventListener("click", ()=>{
                setTimeout(()=>{
                    menu.classList.remove("menu-active");
                    overlayMenu.style.display = "none";
                },500);
            });
        }
        removeScreen();
    }
    toggle('.block-element', '.hamburger');
});

function themeDiv(toggleOffSelector, allToggleActiveSelector) {
    'use strict';
    const bitoggle = document.querySelectorAll(toggleOffSelector);
    const allToggle = document.querySelectorAll(allToggleActiveSelector);
    bitoggle.forEach((separate) => {
        separate.addEventListener("click", function () {
            separate.classList.toggle('bi-toggle-on');
        });
    });
    bitoggle.forEach((separate) => {
        separate.addEventListener("click", function () {
            allToggle.forEach((index) => {
                if (index.classList.contains('bi-toggle-off', 'bi-toggle-on')) {
                    index.classList.remove('bi-toggle-on');
                }
            });
        });
    });
    return bitoggle;
}
themeDiv('.bi-toggle-off', '.bi-toggle-off.bi-toggle-on');

document.addEventListener("DOMContentLoaded", () => {
    function faqtoggle() {
        const itemsfaq = document.querySelectorAll('.faq-item');
        itemsfaq.forEach((userfaq) => {
            const content = userfaq.querySelector(".faq-content");
            const plus = userfaq.querySelector(".faq-heading");
            plus.addEventListener("click", () => {
                itemsfaq.forEach((item) => {
                    const itemContent = item.querySelector(".faq-content");
                    if (item !== userfaq) {
                        itemContent.classList.remove("faq-actives");
                    } else {
                        content.classList.toggle("faq-actives");
                    }
                });
            });
        });
    }
    faqtoggle();
});

function scrolling(){
    'use strict';
    const bodyscroll = document.querySelector(".body-pd");
    window.addEventListener('scroll', scrollHandler, { passive: true });
    function scrollHandler(){
        if(window.pageYOffset >= 97){
            bodyscroll.classList.add("scroll");
        }else if(window.pageYOffset == 0){
            bodyscroll.classList.remove("scroll"); 
        }
    }
}
scrolling();

function changebgcolor() {
    const fill = document.querySelectorAll(".bi.bi-moon-stars-fill");
    const body = document.querySelector("body");
    const brightnessState = localStorage.getItem("bi-brightness-high-fill");
    if (brightnessState === "on") {
        body.classList.add("bg-toggle-on");
    }else{
        body.classList.remove("bg-toggle-on");
    }
    fill.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.classList.contains("bi-moon-stars-fill")) {
                item.classList.replace("bi-moon-stars-fill", "bi-brightness-high-fill");
                body.classList.add("bg-toggle-on");
                localStorage.setItem("bi-brightness-high-fill", "on");
            } else if (item.classList.contains("bi-brightness-high-fill")) {
                item.classList.replace("bi-brightness-high-fill", "bi-moon-stars-fill");
                body.classList.remove("bg-toggle-on");
                localStorage.setItem("bi-brightness-high-fill", "off");
            }
        });
    });
}
changebgcolor();

function clickBtn() {
    'use strict';
    const opnedivs = document.querySelector("#open-here");
    const overlayback = document.querySelector("#overlay-shadow");
    const imgclose = document.querySelector("#close");

    opnedivs.addEventListener("click",()=>{
        overlayback.style.display="block";
    });
    imgclose.addEventListener("click", ()=>{
        overlayback.style.display="none";
    });

    const anotherfunctionbody = ()=>{
        'use strict';
        const opnedivs2 = document.querySelector("#open-here2");
        const overlayback2 = document.querySelector("#overlay-shadow2");
        const overlayback3 = document.querySelector("#overlay-shadow3");
        const imgclose2 = document.querySelector("#close2");
        const imgclose3 = document.querySelector("#close3");

        opnedivs2.addEventListener("click", ()=>{
            overlayback2.style.display="block";
        });
        imgclose2.addEventListener("click", ()=>{
            overlayback2.style.display="none";
        });
        imgclose3.addEventListener("click", ()=>{
            overlayback3.style.display="none";
        });
    }
    anotherfunctionbody();

    const anotherfunction = ()=>{
        'use strict';
        const opnedivs3 = document.querySelector("#open-here3");
        const overlayback3 = document.querySelector("#overlay-shadow3");
        const imgclose3 = document.querySelector("#close3");

        opnedivs3.addEventListener("click", ()=>{
            overlayback3.style.display="block";
        });
        imgclose3.addEventListener("click", ()=>{
            overlayback3.style.display="none";
        });
    }
    anotherfunction();
}
clickBtn();
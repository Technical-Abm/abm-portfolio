//------------# gsap basic animation when user reload the webpage #------------\\

const noderotate = ()=>({
    duration: 2.5,
    opacity: 0,
    ease: "elastic.inOut(1, 0.3)",
    bottom: 500,
});
gsap.from('.node-parent', noderotate());

gsap.from('.brand-logo-sec img',{
    duration: 1,
    delay: 2.5,
    opacity: 0,
});

gsap.from('.body-pd',{
    duration: 1,
    delay: 2.5,
    opacity: 0,
});

gsap.from('.hamburger',{
    duration: 1,
    delay: 2.5,
    opacity: 0,
});

gsap.from('ul',{
    duration: 1,
    delay: 2.5,
    opacity: 0
});

gsap.from('.element-div .bi-moon-stars-fill',{
    duration: 1,
    delay: 2.5,
    opacity: 0
});

gsap.from('.nav-close-btn img',{
    duration: 1,
    delay: 2.5,
    opacity: 0,
});

gsap.from('.say-hello',{
    duration: 3,
    delay: 3,
    opacity: 0,
});

gsap.from('.name',{
    duration: 3,
    delay: 3.5,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.about-b',{
    duration: 3.5,
    delay: 4,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.short-about',{
    duration: 4,
    delay: 4,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.btn-about',{
    duration: 4.5,
    delay: 4,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.brand-sec-img > img',{
    duration: 5,
    delay: 4.5,
    opacity: 0,
    x: 500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.service-section',{
    duration: 3,
    delay: 5,
    opacity: 0,
});

gsap.from('.box-1',{
    duration: 4,
    delay: 5.5,
    opacity: 0,
});

gsap.from('.box-2',{
    duration: 4,
    delay: 6,
    opacity: 0,
});

gsap.from('.box-3',{
    duration: 4,
    delay: 6.5,
    opacity: 0,
});

gsap.from('.flex-img',{
    duration: 5,
    delay: 7,
    opacity: 0,
});

gsap.from('.box-smart-content',{
    duration: 5.5,
    delay: 7,
    opacity: 0,
});

gsap.from('.about',{
    duration: 3,
    delay: 5,
    opacity: 0,
});

gsap.from('.img-about-brand',{
    duration: 6,
    delay: 5,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.school-png',{
    duration: 6,
    delay: 5,
    opacity: 0,
});

gsap.from('.school-about',{
    duration: 6.5,
    delay: 6,
    opacity: 0,
});

gsap.from('.about-school-cotent',{
    duration: 6.5,
    delay: 6,
    opacity: 0,
    x: 500,
    ease: "elastic.inOut(1, 0.3)",
});

//3rd

gsap.from('.Skills-content',{
    duration: 3,
    delay: 5,
    opacity: 0,
});

gsap.from('.skills-content',{
    duration: 6,
    delay: 5,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.frontend-text',{
    duration: 6,
    delay: 5,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.skills-process',{
    duration: 6.5,
    delay: 6,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.img-skills > img',{
    duration: 7,
    delay: 6,
    opacity: 0,
    x: 500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.project-content',{
    duration: 3,
    delay: 5,
    opacity: 0,
});

gsap.from('.project-content-center > p',{
    duration: 6,
    delay: 5,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.img-shadow > *',{
    duration: 6,
    delay: 5,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.project-div-box',{
    duration: 6.5,
    delay: 6,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.faq-text',{
    duration: 3,
    delay: 5,
    opacity: 0,
});

gsap.from('.faq-texts > p',{
    duration: 6,
    delay: 5,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.faq-img > img',{
    duration: 6,
    delay: 5,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('#faq',{
    duration: 6.5,
    delay: 6,
    opacity: 0,
    x: 500,
    ease: "elastic.inOut(1, 0.3)",
});

gsap.from('.faq-item',{
    duration: 7,
    delay: 6,
    opacity: 0,
    x: -500,
    ease: "elastic.inOut(1, 0.3)",
});

const footernode = ()=>({
    duration: 2.5,
    opacity: 0,
    ease: "elastic.inOut(1, 0.3)",
    bottom: -500,
});
gsap.from('.footer-node', footernode());


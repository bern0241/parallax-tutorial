const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

let xValue = 0, yValue = 0;

let rotateDegree = 0; //mountains

function update(cursorPosition) 
{
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        let isInLeft =  parseFloat(getComputedStyle(el).left) < innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) 
        perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)`;
    })
}

update(0);

addEventListener("mousemove", (event) => {
    if (timeline.isActive()) return;

    xValue = event.clientX - innerWidth / 2; //checks how far from middle
    yValue = event.clientY - innerHeight / 2; //checks how far from middle

    rotateDegree = (xValue / (innerWidth / 2)) * 20;
    
    update(event.clientX);
})

if (innerWidth >= 725) {
    // main.style.maxHeight = `${innerWidth * 0.6}px`;
} else {
    // main.style.maxHeight = `${innerWidth * 1.6}px`;
}


/* GSAP Animation */

let timeline = gsap.timeline();

// parallax_el.forEach((el) => {
//     timeline.from(el, {
//         // top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
//         // top: `calc(50% + 90px)`,
//         top: '2000px',
//         duration: 2,
//         delay: 2
//     },
// );
// });

const durationLoad = 2.5;
const easeLoad = "power3.out";

const bgImg = document.querySelector('.bg-img');
timeline.to(bgImg, {
    duration: durationLoad,
    top: `calc(50% + 260px)`,
    ease: easeLoad
}, 1);

timeline.to(".mountain_6", {
    duration: durationLoad,
    top: 'calc(50% + 200px)',
    ease: easeLoad
}, 1)

timeline.to(".mountain_5", {
    duration: durationLoad,
    top: 'calc(50% + 130px)',
    ease: easeLoad
}, 1)

timeline.to(".mountain_4", {
    duration: durationLoad,
    top: 'calc(50% + 340px)',
    ease: easeLoad
}, 1)

timeline.to(".mountain_3", {
    duration: durationLoad,
    top: 'calc(50% + 270px)',
    ease: easeLoad
}, 1)

timeline.to(".mountain_2", {
    duration: durationLoad,
    top: 'calc(50% + 120px)',
    ease: easeLoad
}, 1)

timeline.to(".mountain_1", {
    duration: durationLoad,
    top: 'calc(50% + 90px)',
    ease: easeLoad
}, 1)

timeline.from(".text h1", {
    y: (innerHeight - document.querySelector(".text h1").getBoundingClientRect().top) + 200,
    duration: 2,
    ease: easeLoad
}, 2.5)

timeline.from(".text h2", {
    y: -150,
    opacity: 0,
    duration: 1.5,
}, 3)

timeline.from(".hide", {
    opacity: 0,
    duration: 1.5,
}, 3)



// MOVE SCROLL DOWN
let text = document.querySelector('.text');
let mountain_6 = document.querySelector('.mountain_6');
let mountain_5 = document.querySelector('.mountain_5');
let mountain_4 = document.querySelector('.mountain_4');
let mountain_3 = document.querySelector('.mountain_3');
let mountain_2 = document.querySelector('.mountain_2');
let mountain_1 = document.querySelector('.mountain_1');

let mountain1Pos = getComputedStyle(mountain_1).getPropertyValue('left');
let mountain2Pos = getComputedStyle(mountain_2).getPropertyValue('left');
let mountain3Pos = getComputedStyle(mountain_3).getPropertyValue('left');
let mountain4Pos = getComputedStyle(mountain_4).getPropertyValue('left');
let mountain5Pos = getComputedStyle(mountain_5).getPropertyValue('left');
let mountain6Pos = getComputedStyle(mountain_6).getPropertyValue('left');

addEventListener('scroll', () => {
    let value = scrollY;
    
    text.style.marginTop = value * 2 + 'px';
    // mountain_2.style.transform = value * 1.5 + 'px';
    mountain_1.style.left = parseFloat(mountain1Pos) + value * -0.5 + 'px';
    mountain_2.style.left = parseFloat(mountain2Pos) + value * 1 + 'px';
    mountain_3.style.left = parseFloat(mountain3Pos) + value * -0.75 + 'px';
    mountain_4.style.left = parseFloat(mountain4Pos) + value * 1 + 'px';
    mountain_5.style.left = parseFloat(mountain5Pos) + value * 0.5 + 'px';
    mountain_6.style.left = parseFloat(mountain6Pos) + value * -1 + 'px';
})
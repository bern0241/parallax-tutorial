const parallax_el = document.querySelectorAll(".parallax");

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
    xValue = event.clientX - innerWidth / 2; //checks how far from middle
    yValue = event.clientY - innerHeight / 2; //checks how far from middle

    rotateDegree = (xValue / (innerWidth / 2)) * 20;
    
    update(event.clientX);
})

/* GSAP Animation */

let timeline = gsap.timeline();

// parallax_el.forEach((el) => {
//     timeline.from(el, {
//         // top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
//         top: `calc(50% + 90px)`,
//         // top: '0px',
//         duration: 1,
//         delay: 1
//     },
// );
// });

timeline.to(".bg-img", {
    // top: `${document.querySelector(".bg-img").offsetHeight / 2}px`,
    duration: 1,
    delay: 1,
    top: `calc(50% + 90px)`,

})
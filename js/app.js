const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

addEventListener("mousemove", (event) => {
    xValue = event.clientX - innerWidth / 2; //checks how far from middle
    yValue = event.clientY - innerHeight / 2; //checks how far from middle

    // console.log(xValue, yValue);
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        // let speedx = 1;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    })
})
const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

addEventListener("mousemove", (event) => {
    xValue = event.clientX - innerWidth / 2; //checks how far from middle
    yValue = event.clientY - innerHeight / 2; //checks how far from middle

    // console.log(xValue, yValue);
    parallax_el.forEach(el => {
        // el.style.transform = `translate(calc(-50% + ${xValue}px, (calc(-50% + ${yValue}px))`;
        el.style.transform = `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`;
    })
})
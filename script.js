// Smooth hover effect for navigation
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textShadow = "0px 0px 10px cyan";
    });

    link.addEventListener('mouseout', () => {
        link.style.textShadow = "none";
    });
});

// 3D Hover Effect for Image
const image = document.querySelector(".hero .image");
document.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    image.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
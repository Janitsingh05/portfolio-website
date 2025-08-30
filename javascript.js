
document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");

  carousel.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });

  carousel.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
});





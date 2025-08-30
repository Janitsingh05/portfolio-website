
document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");

  carousel.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });

  carousel.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
});


// ✅ EmailJS Initialization
(function() {
  emailjs.init("36uCYh32nDrzHj8rl"); // Your PUBLIC KEY only
})();

// ✅ Handle Form Submit
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Service ID + Template ID + Form data
  emailjs.sendForm("service_68tp8nc", "template_abc123", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, (error) => {
      console.error("FAILED...", error);
      alert("❌ Failed to send message. Please try again.");
    });
});

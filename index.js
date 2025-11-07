// live count achievement section
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute("data-target");
          let count = 0;
          const increment = target / 250;
          const updateCount = () => {
            count += increment;
            if (count < target) {
              counter.innerText = Math.floor(count);
              requestAnimationFrame(updateCount);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

function fadeImages() {
  let carousel = document.getElementById("imageCarousel");
  let images = carousel.children;

  // Clone first image
  let firstImage = images[0].cloneNode(true);

  // Fade out first image while shifting others smoothly
  // images[0].style.opacity = "0";
  images[0].style.transition = "trasnform 1s ease-in-out";

  setTimeout(() => {
    // Remove the first image and reset opacity
    carousel.removeChild(images[0]);
    firstImage.style.opacity = "1";

    // Append the first image to the end
    carousel.appendChild(firstImage);
  }, 0); // Wait for fade effect
}

setInterval(fadeImages, 5000); // Rotate every 3 seconds

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("imageCarouselService");
  const images = Array.from(container.children);

  function rotateImages() {
    const first = images.shift();
    images.push(first);
    container.innerHTML = "";
    images.forEach((img) => container.appendChild(img));
  }

  setInterval(rotateImages, 2000);
});

// Contact
document.getElementById("subject").addEventListener("change", function () {
  if (this.value) {
    this.classList.remove("placeholder-select");
  } else {
    this.classList.add("placeholder-select");
  }
});

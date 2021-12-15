var imgAnime = anime({
  targets: ".sImg",
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  duration: 1500,
  easing: "linear",
});

var textAnime1 = anime({
  targets: ".p1",
  keyframes: [
    { scale: 0.3, opacity: 0, translateX: 250 },
    { scale: 0.8, opacity: 0.5, translateX: 150 },
    { scale: 1, opacity: 1, translateX: 0 },
  ],
  duration: 1000,
  easing: "linear",
  delay: 100,
});

var textAnime2 = anime({
  targets: ".p2",
  keyframes: [
    { scale: 0.3, opacity: 0, translateX: 250 },
    { scale: 0.8, opacity: 0.5, translateX: 150 },
    { scale: 1, opacity: 1, translateX: 0 },
  ],
  duration: 800,
  easing: "linear",
  delay: 300,
});

var textAnime3 = anime({
  targets: ".p3",
  keyframes: [
    { scale: 0.3, opacity: 0, translateX: 250 },
    { scale: 0.8, opacity: 0.5, translateX: 150 },
    { scale: 1, opacity: 1, translateX: 0 },
  ],
  duration: 800,
  easing: "linear",
  delay: 500,
});

var textAnime4 = anime({
  targets: ".p4",
  keyframes: [
    { scale: 0.3, opacity: 0, translateX: 350 },
    { scale: 0.8, opacity: 0.5, translateX: 250 },
    { scale: 1, opacity: 1, translateX: 0 },
  ],
  duration: 800,
  easing: "linear",
  delay: 700,
});

var btnAnime = anime({
  targets: ".btn",
  keyframes: [
    { scale: 2, opacity: 0, translateX: -150 },
    { scale: 1.5, opacity: 0.5, translateX: -75 },
    { scale: 1, opacity: 1, translateX: 0 },
  ],
  duration: 800,
  easing: "linear",
  delay: 300,
});

document.querySelector(".owl-dot").addEventListener("click", imgAnime.restart);
document
  .querySelector(".owl-dot")
  .addEventListener("click", textAnime1.restart);
document
  .querySelector(".owl-dot")
  .addEventListener("click", textAnime2.restart);
document
  .querySelector(".owl-dot")
  .addEventListener("click", textAnime3.restart);
document
  .querySelector(".owl-dot")
  .addEventListener("click", textAnime4.restart);
document.querySelector(".owl-dot").addEventListener("click", btnAnime.restart);

const sliderBg = document.querySelector(".slider-card");

document.querySelector(".owl-dot").addEventListener("click", () => {
  sliderBg.classList.toggle("slider-card-bg");
});

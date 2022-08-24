// window.addEventListener("keydown", function (e) {
//   if (e.key === "a") {
//     let audio = new Audio("sounds/clap.wav");
//     audio.play();
//   } else if (e.key === "s") {
//     let audio = new Audio("sounds/hihat.wav");
//     audio.play();
//   } else if (e.key === "d") {
//     let audio = new Audio("sounds/kick.wav");
//     audio.play();
//   } else if (e.key === "f") {
//     let audio = new Audio("sounds/openhat.wav");
//     audio.play();
//   } else if (e.key === "g") {
//     let audio = new Audio("sounds/boom.wav");
//     audio.play();
//   } else if (e.key === "h") {
//     let audio = new Audio("sounds/ride.wav");
//     audio.play();
//   } else if (e.key === "j") {
//     let audio = new Audio("sounds/snare.wav");
//     audio.play();
//   } else if (e.key === "k") {
//     let audio = new Audio("sounds/tom.wav");
//     audio.play();
//   } else if (e.key === "l") {
//     let audio = new Audio("sounds/tink.wav");
//     audio.play();
//   }
// });

const playSound = (e) => {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.play();
};
window.addEventListener("keydown", playSound);

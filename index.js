const drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    const drumKey = this.innerHTML;

    makeSound(drumKey);

    buttonAnimation(drumKey);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      const kick = new Audio("/sounds/kick-bass.mp3");
      kick.play();
      break;

    case "a":
      const snare = new Audio("/sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      const toms1 = new Audio("/sounds/tom-1.mp3");
      toms1.play();
      break;

    case "d":
      const toms2 = new Audio("/sounds/tom-2.mp3");
      toms2.play();

    case "j":
      const toms3 = new Audio("/sounds/tom-3.mp3");
      toms3.play();
      break;

    case "k":
      const toms4 = new Audio("/sounds/tom-4.mp3");
      toms4.play();
      break;

    case "l":
      const crash = new Audio("/sounds/crash.mp3");
      crash.play();
      break;

    default:
      break;
  }
}

const buttonAnimation = (currentKey) => {
  document.querySelector(`.${currentKey}`).classList.add("pressed");

  setTimeout(() => {
    document.querySelector(`.${currentKey}`).classList.remove("pressed");
  }, 100);
};

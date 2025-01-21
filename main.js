// Hunger
let hunger = 100;
function decreaseHunger() {
  const hungerDisplay = document.getElementById("hungerDisplay");
  const alertDisplay = document.getElementById("hungerAlertDisplay");
  if (hunger > 0) {
    hunger--;
    hungerDisplay.innerHTML = `🍗${hunger}`;
  } else {
    hungerDisplay.innerHTML = "🍗X";
    clearInterval(hungerInterval);
  }
  if (hunger < 30) {
    alertDisplay.innerHTML = "I'm Hungry!";
  } else {
    alertDisplay.innerHTML = "";
  }
}
function increaseHunger() {
  const hungerDisplay = document.getElementById("hungerDisplay");
  const alertDisplay = document.getElementById("hungerAlertDisplay");
  hunger += 30;
  if (hunger > 100) {
    hunger = 100;
  }
  hungerDisplay.innerHTML = `🍗${hunger}`;
  if (hunger >= 30) {
    alertDisplay.innerHTML = "";
  }
}
const increaseHungerButton = document.getElementById("increaseHungerButton");
increaseHungerButton.addEventListener("click", increaseHunger);
const hungerInterval = setInterval(decreaseHunger, 2000);

// Sleep
let sleep = 100;
function decreaseSleep() {
  const sleepDisplay = document.getElementById("sleepDisplay");
  const alertDisplay = document.getElementById("sleepAlertDisplay"); 
  if (sleep > 0) {
    sleep--;
    sleepDisplay.innerHTML = `🛏️${sleep}`;
  } else {
    sleepDisplay.innerHTML = "🛏️X";
    clearInterval(sleepInterval);
  }
  if (sleep < 30) {
    alertDisplay.innerHTML = "I'm Sleepy!";
  } else {
    alertDisplay.innerHTML = "";
  }
}
function increaseSleep() {
  const sleepDisplay = document.getElementById("sleepDisplay");
  const alertDisplay = document.getElementById("sleepAlertDisplay");
  sleep += 60;
  if (sleep > 100) {
    sleep = 100;
  }
  sleepDisplay.innerHTML = `🛏️${sleep}`;
  if (sleep >= 30) {
    alertDisplay.innerHTML = "";
  }
}
const increaseSleepButton = document.getElementById("increaseSleepButton");
increaseSleepButton.addEventListener("click", increaseSleep);
const sleepInterval = setInterval(decreaseSleep, 3000);

// Fun
let fun = 100;
function decreaseFun() {
  const funDisplay = document.getElementById("funDisplay");
  const alertDisplay = document.getElementById("funAlertDisplay");
  if (fun > 0) {
    fun--;
    funDisplay.innerHTML = `🏀${fun}`;
  } else {
    funDisplay.innerHTML = "🏀X";
    clearInterval(funInterval);
  }
  if (fun < 30) {
    alertDisplay.innerHTML = "I'm Bored!";
  } else {
    alertDisplay.innerHTML = "";
  }
}
function increaseFun() {
  const funDisplay = document.getElementById("funDisplay");
  const alertDisplay = document.getElementById("funAlertDisplay");
  fun += 30;
  if (fun > 100) {
    fun = 100;
  }
  funDisplay.innerHTML = `🏀${fun}`;
  if (fun >= 30) {
    alertDisplay.innerHTML = "";
  }
}
const increaseFunButton = document.getElementById("increaseFunButton");
increaseFunButton.addEventListener("click", increaseFun);
const funInterval = setInterval(decreaseFun, 1000);

// Audio
const hungerButton = document.getElementById("increaseHungerButton");
const hungerAudio = document.getElementById("increaseHungerSound");
hungerButton.addEventListener("click", () => {
    hungerAudio.play();
});
const sleepButton = document.getElementById("increaseSleepButton");
const sleepAudio = document.getElementById("increaseSleepSound");
sleepButton.addEventListener("click", () => {
    sleepAudio.play();
});
const funButton = document.getElementById("increaseFunButton");
const funAudio = document.getElementById("increaseFunSound");
funButton.addEventListener("click", () => {
    funAudio.play();
});


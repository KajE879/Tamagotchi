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
// Hunger Increase
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
// Hunger Time
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
// Sleep Increase
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
// Sleep Time
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
// Fun Increase
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
// Fun Time
const funInterval = setInterval(decreaseFun, 1000);

// Audio
const music = document.getElementById('music');
const toggleMusicButton = document.getElementById('toggleMusic');

document.getElementById('start-button').addEventListener('click', () => {
  music.play().catch(error => {
    console.log("Muziek kan niet automatisch worden afgespeeld:", error);
  });
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
});

// Audio Toggle Button
toggleMusicButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});


// Hamburger
document.getElementById('menuButton').addEventListener('click', function() {
  const menuContent = document.getElementById('menuContent');
  if (menuContent.style.display === 'none' || menuContent.style.display === '') {
      menuContent.style.display = 'block';
  } else {
      menuContent.style.display = 'none';
  }
});

// Keybinds
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
      increaseFun();
  } else if (event.key === 'ArrowDown') {
      increaseSleep();
  } else if (event.key === 'ArrowLeft') {
      increaseHunger();
  }
});
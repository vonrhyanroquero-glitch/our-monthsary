let enteredDate = "";

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  const target = document.getElementById(id);
  target.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (id === "song") {
    const music = document.getElementById("music");
    music.pause();
  }
}

function pressKey(key) {
  if (enteredDate.length >= 4) return;
  enteredDate += key;
  updateDateDisplay();
}

function clearDate() {
  enteredDate = "";
  updateDateDisplay();
  document.getElementById("dateError").textContent = "";
}

function updateDateDisplay() {
  let display = enteredDate.padEnd(4, "_");
  document.getElementById("dateDisplay").textContent =
    display.slice(0, 2) + " / " + display.slice(2);
}

function checkDate() {
  const error = document.getElementById("dateError");

  if (enteredDate === "0717") {
    error.textContent = "";
    createHeartBurst();
    setTimeout(() => showScreen("home"), 500);
  } else {
    error.textContent = "Hmm... that's not our special date. Try again, love. ♡";
    enteredDate = "";
    updateDateDisplay();
  }
}

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > .5 ? "♥" : "♡";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  heart.style.animationDuration = (6 + Math.random() * 6) + "s";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 13000);
}

function createHeartBurst() {
  for (let i = 0; i < 18; i++) {
    setTimeout(createHeart, i * 80);
  }
}

setInterval(createHeart, 1200);

let startTime,
  updatedTime,
  difference,
  tInterval,
  running = false;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);

function startStop() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(updateTime, 1);
    startStopBtn.innerHTML = "Stop";
    startStopBtn.classList.remove("start");
    startStopBtn.classList.add("stop");
    running = true;
  } else {
    clearInterval(tInterval);
    startStopBtn.innerHTML = "Start";
    startStopBtn.classList.remove("stop");
    startStopBtn.classList.add("start");
    running = false;
  }
}

function reset() {
  clearInterval(tInterval);
  display.innerHTML = "00:00:00";
  startStopBtn.innerHTML = "Start";
  startStopBtn.classList.remove("stop");
  startStopBtn.classList.add("start");
  running = false;
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function showScreen1() {
  document.querySelector(".screen1").hidden = false;
  document.querySelector(".screen2").hidden = true;
}

function showScreen2() {
  document.querySelector(".screen1").hidden = true;
  document.querySelector(".screen2").hidden = false;
}

document.getElementById("cookie").addEventListener("click", showScreen2);
document.getElementById("btnReset").addEventListener("click", showScreen1);

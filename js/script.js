function show() {
  const fog = document.querySelector("#fog");
  const sb = document.querySelector("#sidebar");
  sb.classList.toggle("shide");
  fog.classList.toggle("fhide");
}

function togglePw() {
  const pw = document.querySelector("#pw");
  const cb = document.querySelector("#showPw");
  if (cb.checked) {
    pw.type = "text";
  } else {
    pw.type = "password";
  }
}

var ri = 0;

function banner(n) {
  const images = document.querySelectorAll(".i");
  const steps = document.querySelectorAll(".step");
  images[n].classList.toggle("bhide");
  images[ri].classList.toggle("bhide");
  steps[n].classList.toggle("active");
  steps[ri].classList.toggle("active");
  ri = n;
}

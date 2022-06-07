function show() {
  const fog = document.querySelector("#fog");
  const sb = document.querySelector("#sidebar");
  sb.classList.toggle("shide");
  fog.classList.toggle("fhide");
}

function togglePw(){
  const pw = document.querySelector("#pw");
  const cb = document.querySelector("#showPw");
  if(cb.checked){
    pw.type = "text";
  }else{
    pw.type = "password";
  }
}
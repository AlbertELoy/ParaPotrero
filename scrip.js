//boton ir hacia arriba

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 10);
    //  para que desaparesca rapido el boton: buttonUp.style.transform = "scale(0)";
  }
}

//para que aparesca y desaparesca el boton ir hacia arriba

buttonUp = document.getElementById("button-up");
window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;
  if (scroll > 700) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 700) {
    buttonUp.style.transform = "scale(0)";
  }
};

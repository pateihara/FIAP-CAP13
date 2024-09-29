// Obtém a modal
var modal = document.getElementById("myModal");

// Obtém o botão que abre a modal
var btn = document.getElementById("openModalBtn");

// Obtém o elemento <span> que fecha a modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre a modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Quando o usuário clicar no <span> (x), fecha a modal
span.onclick = function () {
  modal.style.display = "none";
};

// Quando o usuário clicar fora da modal, fecha-a
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

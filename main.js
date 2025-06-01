const botaoAbrir = document.querySelector(".header-mobile > button");
const botaoFechar = document.querySelector(".header-mobile nav button");
const body = document.querySelector("body");
const nav = document.querySelector(".header-mobile nav");

if (botaoAbrir && botaoFechar && nav) {
  botaoAbrir.addEventListener('click', abrirMenu);
  botaoFechar.addEventListener('click', fecharMenu);

  function abrirMenu() {
    body.classList.add("escurecer");
    nav.classList.add("abrir");
  }

  function fecharMenu() {
    body.classList.remove("escurecer");
    nav.classList.remove("abrir");
  }

  // Fecha o menu ao clicar no overlay escurecido
  document.body.addEventListener("click", (e) => {
    if (e.target === document.body && body.classList.contains("escurecer")) {
      fecharMenu();
    }
  });
}

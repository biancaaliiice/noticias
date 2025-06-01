const botaoAbrir = document.querySelector("header > button");
const botaoFechar = document.querySelector("nav.mobile > button");
const body = document.querySelector("body");
const nav = document.querySelector("nav.mobile");

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

  document.body.addEventListener("click", (e) => {
    if (e.target === document.body && body.classList.contains("escurecer")) {
      fecharMenu();
    }
  });
}

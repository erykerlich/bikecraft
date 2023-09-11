// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

const ativarLink = (link) => {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
};

links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

const ativarProduto = (paramentro) => {
  const elemento = document.getElementById(paramentro);
  if (elemento) {
    elemento.checked = true;
  }
};

// Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");
const ativarPerguntas = (ev) => {
  const pergunta = ev.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
};

const eventosPerguntas = (pergunta) => {
  pergunta.addEventListener("click", ativarPerguntas);
};

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

const trocarImagem = (ev) => {
  const img = ev.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
};

const eventosGaleria = (img) => {
  img.addEventListener("click", trocarImagem);
};

galeria.forEach(eventosGaleria);

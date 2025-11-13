const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const timer = document.querySelector(".app__card-timer");
const Textcontent = document.querySelector(".app__section-banner-container");
const titulo = Textcontent.querySelector(".app__title");
const btnStart = document.querySelector(".app__card-primary-button");

let modoAtual = "";
const TEMPO_FOCO = 1500;
const TEMPO_CURTO = 300;
const TEMPO_LONGO = 900;

// ----- MUDAR MODO -----

focoBtn.addEventListener("click", () => {
  alterarContexto("foco");

  titulo.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`;
  modoAtual = "foco";
});

curtoBtn.addEventListener("click", () => {
  alterarContexto("descanso-curto");

  titulo.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta.</strong>`;
  modoAtual = "curto";
});

longoBtn.addEventListener("click", () => {
  alterarContexto("descanso-longo");

  titulo.innerHTML = `Hora de voltar à superfície<br><strong class="app__title-strong">Faça uma pausa longa.</strong>`;
  modoAtual = "longo";
});

// ----- INICIAR TIMER -----
btnStart.addEventListener("click", () => {
  if (modoAtual === "foco") timer.innerHTML = TEMPO_FOCO;
  else if (modoAtual === "curto") timer.innerHTML = TEMPO_CURTO;
  else if (modoAtual === "longo") timer.innerHTML = TEMPO_LONGO;
});

const alterarContexto = (contexto) =>{
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);
}

const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const timer = document.querySelector(".app__card-timer");
const Textcontent = document.querySelector(".app__section-banner-container");
const titulo = Textcontent.querySelector(".app__title");
const btnStart = document.querySelector(".app__card-primary-button");
const btnActive = document.querySelector(".app__card-list-item");

let modoAtual = "";
let tempoRestante = 0;
let intervaloAtivo = false;

const TEMPO_FOCO = 1500;
const TEMPO_CURTO = 300;
const TEMPO_LONGO = 900;

const alterarContexto = (contexto) => {
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);
};

const ativarBotao = (botaoAtivo) => {
  focoBtn.classList.remove("active");
  curtoBtn.classList.remove("active");
  longoBtn.classList.remove("active");

  botaoAtivo.classList.add("active");

  tempoRestante = 0;
  intervaloAtivo = false;
};

focoBtn.addEventListener("click", () => {
  alterarContexto("foco");
  ativarBotao(focoBtn);

  titulo.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`;
  modoAtual = "foco";
  timer.innerHTML = "25:00";
});

curtoBtn.addEventListener("click", () => {
  alterarContexto("descanso-curto");
  ativarBotao(curtoBtn);

  titulo.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta.</strong>`;
  modoAtual = "curto";
  timer.innerHTML = "05:00";

});

longoBtn.addEventListener("click", () => {
  alterarContexto("descanso-longo");
  ativarBotao(longoBtn);

  titulo.innerHTML = `Hora de voltar à superfície<br><strong class="app__title-strong">Faça uma pausa longa.</strong>`;
  modoAtual = "longo";
  timer.innerHTML = "15:00";

});



const iniciarTimer = () => {
  timer.innerHTML = formatarTempo(tempoRestante);

  if (tempoRestante > 0) {
    tempoRestante--;
    setTimeout(iniciarTimer, 1000);
  }
};

const formatarTempo = (segundos) => {
  const min = Math.floor(segundos / 60);
  const sec = segundos % 60;

  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
};

btnStart.addEventListener("click", () => {
  if (intervaloAtivo) return;

  if (modoAtual === "foco") tempoRestante = TEMPO_FOCO;
  else if (modoAtual === "curto") tempoRestante = TEMPO_CURTO;
  else if (modoAtual === "longo") tempoRestante = TEMPO_LONGO;

  intervaloAtivo = true;

  iniciarTimer();
});

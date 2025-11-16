const btnAdcionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");

btnAdcionarTarefa.addEventListener("click", () => {
  formAdicionarTarefa.classList.toggle("hidden")
});

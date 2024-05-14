const screen1 = document.querySelector(".screen1")

const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;


// função callback
function handleTryClick(event) {
  event.preventDefault() // não execute o padrão (não envia o formulário)

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
  
    document.
      querySelector(".screen h2")
      .innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = "" 
  // após a tentaiva sem sucesso,limpar o campo numérico das mesmas.

  xAttempts++
}

// Eventos 
const btnTry = document.querySelector("btnTry")
const btnReset = document.querySelector("btnReset")


btnTry.addEventListener('click', handleTryClick)

handleTryClick('click', handleTryClick)
btnReset.addEventListener('click', function() {
  screen1.classList.add("hide")
  screen2.classList.remove("hide")
})
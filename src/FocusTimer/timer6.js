import state from './state2.js'
import * as el from './elements4.js'
import { reset } from './actions5.js'
import * as sounds from './sounds7.js'


export function countdown() {
  // primeiro tem que zerar o setTimerout anterior
  clearTimeout(state.countdownId) 
  // a cada play vai limpar primeiro e rodar de novo

  if (!state.isRunning) { // se não running parar de fz o coutdown
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    return
  }

  updateDisplay(minutes, seconds) // atualizar valores
  state.countdownId = setTimeout(() => countdown(), 1000) // callback, recursão
  // vai iniciar e vai contando a cada 1s, e qdo não running vai parar
  // toda vez q criar setTimerout precisa guardar no estado (state), criar uma variável
  // pq ele sempre retorna um ID
  // para evitar bug de acúmulo
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes // ?? se não digitar(null) pega o valor q tiver no state
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}
import state from "./state2.js"
import * as events from "./events3.js"
import * as timer from "./timer6.js"

// export * como FocusTimer para RECEBER NO MAIN todo esse index
// função para iniciar cronômetro
export function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  events.registerControls()
  timer.updateDisplay()
  events.setMinutes()
  
}

events.registerSounds()


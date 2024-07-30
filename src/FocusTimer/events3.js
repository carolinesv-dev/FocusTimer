import { controls, sounds } from "./elements4.js";
import * as actions from "./actions5.js";
import * as el from "./elements4.js";
import { updateDisplay } from "./timer6.js";
import state from "./state2.js";

// export * como events para RECEBER NO INDEX
export function registerControls() { // executa essa função no index
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action // target: alvo / dataset.action: acessa o botão
    // se as minhas ações receber uma ação(de clique) e não for função no local clicado, então para a execução para não dá(imprimir) undefined
    if (typeof actions[action]() != "function") {
      return
    }
    actions[action]() // se for função executa os comandos
  })
}

export function registerSounds() {
  sounds.addEventListener('click', (event) => {
    const action = event.target.dataset.action // target: alvo / dataset.action: acessa o botão
    // se as minhas ações receber uma ação(de clique) e não for função no local clicado, então para a execução para não dá(imprimir) undefined
    if (typeof actions[action]() != "function") {
      return
    }
    actions[action]() // se for função executa os comandos
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key)
  // expressão regular que só aceita números

  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contentEditable')
  })

  document.querySelector('[data-action="treeMusic"]').addEventListener('click', treeMusic);
  document.querySelector('[data-action="cloudMusic"]').addEventListener('click', cloudMusic);
  document.querySelector('[data-action="storeMusic"]').addEventListener('click', storeMusic);
  document.querySelector('[data-action="fireMusic"]').addEventListener('click', fireMusic);


  // Adicionar event listeners aos botões
  el.plusButton.addEventListener('click', actions.increase);
  el.minusButton.addEventListener('click', actions.decrease);

}
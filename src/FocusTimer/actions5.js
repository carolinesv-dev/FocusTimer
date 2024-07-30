import state from "./state2.js" // qdo as funções forem sendo executadas, os estados vão mudar
import * as timer from './timer6.js'
import * as el from "./elements4.js"
import * as sounds from "./sounds7.js"
import { updateDisplay } from "./timer6.js"


export function toggleRunning() {
  state.isRunning = document.documentElement.
    classList.toggle('running') //recebe o running e o botão play fica ativado (ou desativa)

  document.documentElement.
  classList.remove('music-on-tree', 'music-on-cloud', 'music-on-store', 'music-on-fire')
  stopAllMusic()

  timer.countdown()
}

export function set() {
  el.minutes.setAttribute('contentEditable', true)
  el.minutes.focus()
}

export function reset() {
  state.isRunning = false // para de contar o cronômetro
  
  document.documentElement.classList.remove('running') // volta ao valor inicial
  document.documentElement.classList.remove('music-on-tree', 'music-on-cloud', 'music-on-store', 'music-on-fire')
  
  timer.updateDisplay()
  stopAllMusic()
}

export function increase() {
  //adicionar 5 minutos ao timer quando clicar
  let minutes = Number(el.minutes.textContent);
  minutes += 5;

  // Atualizar o estado
  state.minutes = minutes;
  state.seconds = Number(el.seconds.textContent);

  updateDisplay(minutes, state.seconds);
}

export function decrease() {
  //diminuir 5 minutos ao timer quando clicar
  let minutes = Number(el.minutes.textContent);
  minutes -= 5;

  // Garantir que minutos não sejam negativos
  if (minutes < 0) {
    minutes = 0;
  }

  // Atualizar o estado
  state.minutes = minutes;
  state.seconds = Number(el.seconds.textContent);

  updateDisplay(minutes, state.seconds);
}

export function treeMusic() {
  if (state.isRunning) {
    toggleSound('tree')
  }
}

export function cloudMusic() {
  if (state.isRunning) {
    toggleSound('cloud')
  }
}

export function storeMusic() {
  if (state.isRunning) {
    toggleSound('store')
  }
}

export function fireMusic() {
  if (state.isRunning) {
    toggleSound('fire')
  }
}

function toggleSound(type) {
  state.isMute = document.documentElement.classList.toggle(`music-on-${type}`)

  switch (type) {
    case 'tree':
      if (state.isMute) {
        sounds.treePressAudio.play();
      } else {
        sounds.treePressAudio.pause();
      }
      break;

    case 'cloud':
      if (state.isMute) {
        sounds.cloudPressAudio.play();
      } else {
        sounds.cloudPressAudio.pause();
      }
      break;

    case 'store':
      if (state.isMute) {
        sounds.storePressAudio.play();
      } else {
        sounds.storePressAudio.pause();
      }
      break;

    case 'fire':
      if (state.isMute) {
        sounds.firePressAudio.play();
      } else {
        sounds.firePressAudio.pause();
      }
      break;
  }
}

function stopAllMusic() {
  sounds.treePressAudio.pause();
  sounds.cloudPressAudio.pause();
  sounds.storePressAudio.pause();
  sounds.firePressAudio.pause();
}
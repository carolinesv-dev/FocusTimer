//importa para o MAIN

let darkMode = true // pq inicia como light true
const buttonToggle = document.getElementById('toggle-mode') // pega lá do html

buttonToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
})

// com click: se tiver dark o toggle troca para light e vice-versa
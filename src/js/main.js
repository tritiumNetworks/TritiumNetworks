/* global io, alert, fetch */

const el = document.getElementsByClassName('bg')[0]
let lg = 20

document.addEventListener('mousemove', (e) => {
  el.style.backgroundPositionX = -e.pageX / 10 - 300 + 'px'
  el.style.backgroundPositionY = -e.pageY / 10 - 300 + 'px'
})

const socket = io()
socket.on('main:subtitle', (sub) => { document.getElementsByClassName('subtitle')[0].value = sub })
document.getElementsByClassName('subtitle')[0].addEventListener('input', () => { socket.emit('main:subtitle', document.getElementsByClassName('subtitle')[0].value) })

document.getElementsByClassName('logo')[0].addEventListener('click', () => {
  lg--
  document.getElementsByClassName('logo')[0].style.width = lg + 'rem'

  if (lg < 1) {
    lg = 20
    setTimeout(() => {
      alert('왜 그러신거죠...')
      document.getElementsByClassName('logo')[0].style.width = lg + 'rem'
    }, 500)
  }
})

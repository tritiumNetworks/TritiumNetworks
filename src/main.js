/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
let showDetail

window.onload = () => {
  const peoples = ['PMH', 'Noeul', 'CS']

  peoples.forEach((v, i) => {
    document.getElementsByClassName('title-people')[0].innerHTML += '<span class="title-peoples title-peoples-p' + i + '">&nbsp;/ ' + v + '</span>'
  })

  const titleAnime = anime.timeline({ easing: 'easeInOutCubic', loop: false, autoplay: false, complete: titleAnimationDone })
    .add({ targets: '.title-letter', translateY: -50, rotate: 360 })
    .add({ targets: '.title-letter', translateY: 0, rotate: -360 })
    .add({ targets: '.title-accent', color: '#6bedd4' }, '-=1000')
    .add({ targets: '.title-nonAccent', width: 0, opacity: 0 }, '-=1000')

  peoples.forEach((_v, i) => {
    titleAnime.add({ targets: '.title-peoples-p' + i, fontSize: '100%', opacity: 100 })
  })

  titleAnime
    .add({ targets: '.title-peoples', fontSize: 0, opacity: 0 })
    .add({ targets: '.title-nonAccent', width: '100%', opacity: 100 })
    .add({ targets: '.title', translateY: -30 }, '-=1000')

  const buttonAnimation = anime.timeline({ easing: 'easeOutElastic', loop: false, autoplay: false })
    .add({ targets: '.btn-discord', left: '10%' })
    .add({ targets: '.btn-github', left: '20%' })
    .add({ targets: '.btn-detail', left: '30%' })

  const disapperAnimation = anime.timeline({ easing: 'easeInOutExpo', loop: false, autoplay: false, complete: clearElements })
    .add({ targets: ['.btns', '.title'], opacity: 0 }, 0)

  const detailAnimation = anime.timeline({ easing: 'easeInOutCirc', loop: false, autoplay: false })
    .add({ targets: '.detail', opacity: 100 }, 1000)

  titleAnime.play()
  function titleAnimationDone () { buttonAnimation.play() }
  function clearElements () {
    document.getElementsByClassName('title')[0].style.display = 'none'
    document.getElementsByClassName('btns')[0].style.display = 'none'
  }
  showDetail = () => {
    disapperAnimation.play()
    detailAnimation.play()
  }
}

window.onload = () => {
  const peoples = ['PMH', 'Noeul', 'CS']

  peoples.forEach((v, i) => {
    document.getElementsByClassName('title-people')[0].innerHTML += '<span class="title-peoples title-peoples-p' + i + '">&nbsp;/ ' + v + '</span>'
  })

  const titleAnime = anime.timeline({ easing: 'easeInOutCubic', loop: false, autoplay: false })
    .add({ targets: '.title-letter', translateY: -50, rotate: 360 })
    .add({ targets: '.title-letter', translateY: 0, rotate: -360 })
    .add({ targets: '.title-accent', color: '#6bedd4' }, '-=1000')
    .add({ targets: '.title-nonAccent', width: 0, opacity: 0 }, '-=1000')

  peoples.forEach((_v, i) => {
    titleAnime
      .add({ targets: '.title-peoples-p' + i, fontSize: '100%', opacity: 100 })
      .add({ targets: '.title-peoples-p' + i, fontSize: 0, opacity: 0 })
  })

  titleAnime
    .add({ targets: '.title-nonAccent', width: '100%', opacity: 100 })
    .add({ targets: '.title', translateY: -30 }, '-=1000')

  titleAnime.play()
}

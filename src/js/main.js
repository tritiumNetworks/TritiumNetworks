/* eslint-disable no-unused-vars */
/* global alert confirm fetch */

function submit () {
  const topCont = document.getElementsByClassName('tops')[0].value
  let bottomCont = document.getElementsByClassName('bottoms')[0].value
  if (confirm('윗 내용: ' + topCont + '\n아래 내용: ' + bottomCont + '\n저장하시겠습니까? (취소 불가)')) {
    if (bottomCont.length < 1) bottomCont = 'no-bottom'
    fetch('/api/make/?tops=' + topCont + '&bottoms=' + bottomCont)
      .then((res) => { return res.json() })
      .then((json) => {
        if (!json.success) {
          alert('저장에 실패하였습니다: ' + json.error)
        } else {
          alert('윗 내용: ' + topCont + '\n아래 내용: ' + bottomCont + '\n' + json.id + '번으로 저장되었습니다')
          window.location.replace('/' + json.id)
        }
      })
  }
}

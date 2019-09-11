let btn = document.querySelector('.button')
let new_card = document.querySelector('.new-card')
let new_card__remove = document.querySelector('.new-card__remove')
let new_card__input = document.querySelector('.new-card__input')
let template = require("../../components/card/card.pug");

function toggle() {
  btn.style.display = (btn.style.display == '') ? 'none' : ''
  new_card.style.display = (new_card.style.display == '') ? 'flex' : ''
}

btn.addEventListener("click", toggle)

new_card__remove.addEventListener("click", toggle)

new_card__input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13&&new_card__input.value != '') {
      btn.insertAdjacentHTML('beforebegin', template({name: [new_card__input.value]}))
      new_card__input.value = ''
      toggle()
    }
})

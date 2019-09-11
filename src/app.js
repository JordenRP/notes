import './sass/main.sass'
import './components/card/card.js'
import './components/new-card/new-card.js'

// let template = require("./components/card/card.pug");

// let locals = {
//     name: ['Monday','Tuesday','Wednesday','Thursday']
// }


// document.querySelector('main').insertAdjacentHTML('afterbegin', template(locals));


let dashboard = document.querySelector('.dashboard')



dashboard.addEventListener('mousedown', function (event){
  let elem = event.target.closest('li');
  if (!elem ||event.target.closest('.task__done')) return
  let y = event.pageY
  let pseudo = document.createElement('div')
  pseudo.className = 'pseudo'
  let isPseudo = false

  elem.style.width = elem.offsetWidth + 'px'
  function firstMove () {
    elem.before(pseudo)

    isPseudo = true
    elem.style.position = 'absolute';
    elem.style.zIndex = 1000;
    document.body.append(elem);
  }
  

  moveAt(event.pageX, event.pageY);

  
  function moveAt(pageX, pageY) {
    elem.style.left = pageX - elem.offsetWidth / 2 + 'px';
    elem.style.top = pageY - elem.offsetHeight / 2 + 'px';
  }

  function onMouseMove(event) {
    if (!isPseudo) firstMove()
    moveAt(event.pageX, event.pageY);
    elem.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    elem.hidden = false;
    
    let droppableBelow = elemBelow.closest('li');
    
    if(event.pageY < y&&droppableBelow) {
      droppableBelow.before(pseudo)
    }else if(event.pageY > y&&droppableBelow) {
      droppableBelow.after(pseudo)
    }
  }

  document.addEventListener('mousemove', onMouseMove);
  
  
  elem.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    elem.onmouseup = null;
    elem.style.position = 'static'
    elem.style.width = 100+'%'
    pseudo.after(elem)
    pseudo.remove()
  };
})





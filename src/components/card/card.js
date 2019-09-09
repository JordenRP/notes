window.add = function (e) {
  if (e.keyCode === 13&&e.path[0].value != '') {
    let code = document.createElement('li');
    code.innerHTML = 
    `<div class="task" onclick="done(this)">
        <p class="task__name">  
           ${e.path[0].value} 
        </p>
        <div class="task__check">
          <svg class="task__check_svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg>
        </div>
      </div>`
    e.path[1].lastElementChild.append(code)
    e.path[0].value = ''
  }
};


window.done = function (e){
let target = e.closest('.task')


if(!target) return 

if (target.className == 'task') {

  target.className = 'task task__done'
  
  let fEl = target.firstElementChild 
  let sEl = target.lastElementChild
  
  fEl.className = 'task__name through'
  sEl.firstElementChild.setAttribute('class','task__check_svg gray')

} else if (target.className == 'task task__done') {
  target.className = 'task'
  
  let fEl = target.firstElementChild 
  let sEl = target.lastElementChild
  
  fEl.className = 'task__name'
  sEl.firstElementChild.setAttribute('class','task__check_svg')
}
};

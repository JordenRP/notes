!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty;function a(e,t){return Array.isArray(e)?function(e,t){for(var n,r="",s="",i=Array.isArray(t),o=0;o<e.length;o++)(n=a(e[o]))&&(i&&t[o]&&(n=l(n)),r=r+s+n,s=" ");return r}(e,t):e&&"object"==typeof e?function(e){var t="",n="";for(var a in e)a&&e[a]&&r.call(e,a)&&(t=t+n+a,n=" ");return t}(e):e||""}function s(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)r.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+""}function i(e,t,n,r){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(r?e:e+'="'+e+'"');var a=typeof t;return"object"!==a&&"function"!==a||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=l(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,n){if(1===arguments.length){for(var r=t[0],a=1;a<t.length;a++)r=e(r,t[a]);return r}for(var i in n)if("class"===i){var o=t[i]||[];t[i]=(Array.isArray(o)?o:[o]).concat(n[i]||[])}else if("style"===i){o=(o=s(t[i]))&&";"!==o[o.length-1]?o+";":o;var l=s(n[i]);l=l&&";"!==l[l.length-1]?l+";":l,t[i]=o+l}else t[i]=n[i];return t},t.classes=a,t.style=s,t.attr=i,t.attrs=function(e,t){var n="";for(var o in e)if(r.call(e,o)){var l=e[o];if("class"===o){l=a(l),n=i(o,l,!1,t)+n;continue}"style"===o&&(l=s(l)),n+=i(o,l,!1,t)}return n};var o=/["&<>]/;function l(e){var t=""+e,n=o.exec(t);if(!n)return e;var r,a,s,i="";for(r=n.index,a=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}a!==r&&(i+=t.substring(a,r)),a=r+1,i+=s}return a!==r?i+t.substring(a,r):i}t.escape=l,t.rethrow=function e(t,r,a,s){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&r||s))throw t.message+=" on line "+a,t;try{s=s||n(7).readFileSync(r,"utf8")}catch(n){e(t,null,a)}var i=3,o=s.split("\n"),l=Math.max(a-i,0),c=Math.min(o.length,a+i);i=o.slice(l,c).map((function(e,t){var n=t+l+1;return(n==a?"  > ":"    ")+n+"| "+e})).join("\n");t.path=r;t.message=(r||"Pug")+":"+a+"\n"+i+"\n\n"+t.message;throw t}},function(e,t,n){var r=n(0);e.exports=function(e){var t,n="",a=e||{};return function(e){(function(){var a=e;if("number"==typeof a.length)for(var s=0,i=a.length;s<i;s++){var o=a[s];n=n+'<a class="label" href="#"><h2 class="label__head">'+r.escape(null==(t=o)?"":t)+"</h2></a>"}else{i=0;for(var s in a){i++;o=a[s];n=n+'<a class="label" href="#"><h2 class="label__head">'+r.escape(null==(t=o)?"":t)+"</h2></a>"}}}).call(this)}.call(this,"names"in a?a.names:"undefined"!=typeof names?names:void 0),n}},function(e,t,n){var r=n(0);e.exports=function(e){var t,n="",a=e||{};return function(e){e&&(n=n+'<div class="card"><h3 class="card__head">'+r.escape(null==(t=e)?"":t)+'</h3><hr class="card__line-break"><input class="card__input"><ul class="card__list"></ul></div>')}.call(this,"title"in a?a.title:"undefined"!=typeof title?title:void 0),n}},function(e,t,n){var r=n(0);e.exports=function(e){var t,n="",a=e||{};return function(e,a){a&&function(){var e=a;if("number"==typeof e.length)for(var s=0,i=e.length;s<i;s++){var o=e[s];n=n+'<li class="task"><p class="task__name">'+r.escape(null==(t=o)?"":t)+'</p><div class="task__check"><svg class="task__check_svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></div></li>'}else{i=0;for(var s in e){i++;o=e[s];n=n+'<li class="task"><p class="task__name">'+r.escape(null==(t=o)?"":t)+'</p><div class="task__check"><svg class="task__check_svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></div></li>'}}}.call(this),e&&(n=n+'<li class="task"><p class="task__name">'+r.escape(null==(t=e)?"":t)+'</p><div class="task__check"><svg class="task__check_svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg> </div></li>')}.call(this,"task"in a?a.task:"undefined"!=typeof task?task:void 0,"tasks"in a?a.tasks:"undefined"!=typeof tasks?tasks:void 0),n}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<div class="label new-label toggle"><h2 class="new-label__head">Create a new board... </h2></div><div class="form__container unavailable"><h3 class="form__head">Creating a board</h3><hr class="form__hr"><from class="form"><p class="form_label">What shall we call the board?</p><input class="form__input" autofocus><div class="form__button-group"><button class="form__button_cancel toggle">Cancel</button><button class="form__button_create toggle" type="button">Create</button></div></from></div>'}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<button class="button toggle"><p class="button__name">Add card...</p></button><div class="new-card unavailable"><div class="new-card__form"><input class="new-card__input" placeholder="add a list"><p class="new-card__sign">give me a name!</p></div><div><div class="new-card__remove toggle"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#666666"><path d="M33.73372,23.59961l-10.13411,10.13411l52.26628,52.26628l-52.26628,52.26628l10.13411,10.13411l52.26628,-52.26628l52.26628,52.26628l10.13411,-10.13411l-52.26628,-52.26628l52.26628,-52.26628l-10.13411,-10.13411l-52.26628,52.26628z"></path></g></g></svg></div></div></div>'}},function(e,t,n){var r=n(0);e.exports=function(e){var t,n="",a=e||{};return function(e){e&&(n=n+'<a class="label head" href="#"><h1>'+r.escape(null==(t=e)?"":t)+"</h1></a>")}.call(this,"name"in a?a.name:"undefined"!=typeof name?name:void 0),n}},function(e,t){},function(e,t,n){"use strict";n.r(t);n(9);class r{constructor(){this.events={}}subscribe(e,t,n){let r=this;return void 0===n&&(n=t),r.events.hasOwnProperty(e)||(r.events[e]=[]),r.events[e].push(t.bind(n))}publish(e,t={}){return this.events.hasOwnProperty(e)?this.events[e].map(e=>e(t)):[]}}var a=new class{constructor(e){let t=this;t.actions={},t.mutations={},t.state={},t.events=new r,e.hasOwnProperty("actions")&&(t.actions=e.actions),e.hasOwnProperty("mutations")&&(t.mutations=e.mutations),t.state=e.state}dispatch(e,t,n){return"function"!=typeof this.actions[e]?(console.error(`Action "${e} doesn't exist.`),!1):(console.groupCollapsed(`ACTION: ${e}`),this.actions[e](this,t,n),console.groupEnd(),!0)}commit(e,t,n){return"function"!=typeof this.mutations[e]?(console.log(`Mutation "${e}" doesn't exist`),!1):(this.mutations[e](n,t),console.log(this.state),!0)}}({actions:{addCard(e,t,n){e.commit("addCard",t,n),e.events.publish("cardChange",t)},addLabel(e,t,n){e.commit("addLabel",t,n),e.events.publish("stateChange",[t])},addTask(e,t,n){e.commit("addTask",t,n)}},mutations:{addCard(e,t){e.push({}),e[e.length-1][t]=[]},addLabel(e,t){e[t]=[]},addTask(e,t){e.push(t)}},state:{names:{"19.10.2019":[{meeting:[]},{"to do":[]}]}}});class s{constructor(){this.render=this.render||function(){},this.title=document.querySelector(".title"),this.element=document.querySelector(".content")}}var i=n(4),o=n.n(i);function l(...e){return()=>{e.forEach(e=>{e.classList.toggle("unavailable")})}}var c=n(1),u=n.n(c);var d=n(5),h=n.n(d);var f=n(2),v=n.n(f),p=n(3),m=n.n(p);var b=n(6),g=n.n(b);new class extends s{constructor(){super(),a.events.subscribe("loaderMainPage",this.render,this),this.storage=a.state.names}render(){this.element.innerHTML="",this.title.innerHTML="",this.element.insertAdjacentHTML("afterbegin",o()());const e=l(document.querySelector(".new-label"),document.querySelector(".form__container"));this.element.querySelectorAll(".toggle").forEach(t=>{t.addEventListener("click",e)});const t=document.querySelector(".form__button_create"),n=document.querySelector(".form__button_cancel"),r=document.querySelector(".form__input");t.addEventListener("click",this.handle.bind(this)),r.addEventListener("keydown",t=>{13===t.keyCode&&""!=r.value&&(this.handle(),e())}),n.addEventListener("click",()=>r.value="")}handle(){const e=document.querySelector(".form__input"),t=e.value;a.dispatch("addLabel",t,this.storage),e.value=""}},new class extends s{constructor(){super(),a.events.subscribe("stateChange",this.createNewLabel,this),a.events.subscribe("loaderMainPage",this.render,this)}render(){let e=Object.keys(a.state.names);this.element.insertAdjacentHTML("beforeend",u()({names:e})),this.element.querySelectorAll("a").forEach(e=>{e.addEventListener("click",this.handle)})}handle(e){e.preventDefault();const t=e.target.closest("a").firstChild.innerText;a.events.publish("openLabel",t);window.history.pushState({openLabel:t},null,"")}createNewLabel(e){this.element.insertAdjacentHTML("beforeend",u()({names:e})),this.element.querySelectorAll("a").forEach(e=>{e.addEventListener("click",this.handle)})}},new class extends s{constructor(){super(),a.events.subscribe("openLabel",this.render,this),a.events.subscribe("cardChange",this.createNewCard,this),this.storage=a.state}render(e){this.element.innerHTML="",this.storage=a.state.names[e],this.storage.forEach(e=>{for(let t in e){let n=e[t];this.element.insertAdjacentHTML("beforeend",v()({title:t})),n.length&&(this.element.lastChild.querySelector("ul").innerHTML=m()({tasks:n}))}});const t=this.handle(this.storage);this.element.querySelectorAll(".card").forEach(e=>{e.querySelector(".card__input").addEventListener("keydown",t)})}handle(e){return t=>{const n=t.target;if(13===t.keyCode&&""!=n.value){const r=n.value,s=t.target.parentNode,i=s.querySelector(".card__head").innerText.toLowerCase(),o=e.filter(e=>{if(e[i])return e})[0];a.dispatch("addTask",r,o[i]),s.querySelector(".card__list").insertAdjacentHTML("beforebegin",m()({task:r})),n.value=""}}}createNewCard(e){document.querySelector(".button").insertAdjacentHTML("beforebegin",v()({title:e}));const t=this.handle(this.storage);this.element.querySelectorAll(".card").forEach(e=>{e.querySelector(".card__input").addEventListener("keydown",t)})}},new class extends s{constructor(){super(),a.events.subscribe("openLabel",this.render,this),this.storage=a.state.names}render(e){this.element.insertAdjacentHTML("beforeend",h()());const t=document.querySelector(".button"),n=document.querySelector(".new-card"),r=document.querySelector(".new-card__input");let s=l(t,n);this.element.querySelectorAll(".toggle").forEach(e=>{e.addEventListener("click",s)}),r.addEventListener("keydown",t=>{if(13===t.keyCode&&""!=r.value){const t=r.value;r.value="",a.dispatch("addCard",t,this.storage[e]),s()}})}},new class extends s{constructor(){super(),a.events.subscribe("openLabel",this.render,this)}render(e){this.title.insertAdjacentHTML("afterbegin",g()({name:e})),document.querySelector(".head").addEventListener("click",this.handle.bind(this))}handle(e){e.preventDefault(),a.events.publish("loaderMainPage",""),window.history.pushState({loaderMainPage:""},null,"")}};a.events.publish("loaderMainPage",""),window.history.replaceState({loaderMainPage:""},null,""),window.onpopstate=e=>{for(let t in e.state)a.events.publish(t,e.state[t])}},function(e,t){}]);
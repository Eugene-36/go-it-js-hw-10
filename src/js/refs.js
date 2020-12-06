export default {
    setMenu : document.querySelector('.menu')
};
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
//Add класс
const pressAddTheme =  document.getElementById('theme-switch-toggle')
const bodyAccesse = document.querySelector('body')
pressAddTheme.addEventListener('click', addClass)

function addClass(e){
bodyAccesse.classList.toggle(Theme.DARK)
bodyAccesse.classList.toggle(Theme.LIGHT)
if(e.target.checked){
    localStorage.setItem('theme', Theme.DARK)
}else{
    localStorage.setItem('theme', Theme.LIGHT)
}

}

const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('.theme-switch__toggle'),
  };

 
function setLocalStorage() {
    if (localStorage.theme === Theme.DARK) {
    bodyAccesse.classList.add(Theme.DARK);
    pressAddTheme.checked = true;
    }else {
        bodyAccesse.classList.add(Theme.LIGHT);
    }   
  }
setLocalStorage()



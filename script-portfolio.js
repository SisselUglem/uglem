const toggle = document.getElementById('toggle');
const aside = document.getElementById('aside');

document.onclick = function(e){
    if(e.target.id !== 'aside' && e.target.id !== 'toggle'){
        toggle.classList.remove('active');
        aside.classList.remove('active');
    }
}

toggle.onclick = function (){
    toggle.classList.toggle('active');
    aside.classList.toggle('active');
}
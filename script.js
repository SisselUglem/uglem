const toggler = document.getElementById('toggler');
const dropdown = document.getElementById('dropdown');

document.onclick = function(e){
    if(e.target.id !== 'dropdown' && e.target.id !== 'toggler'){
        toggler.classList.remove('active');
        dropdown.classList.remove('active');
    }
}

toggler.onclick = function (){
    toggler.classList.toggle('active');
    dropdown.classList.toggle('active');
}

let links = document.querySelectorAll('#nav-bar .navbar-nav li a');

links.forEach((li) =>{
  li.addEventListener('click', changeActive);
})

function changeActive() {
  links.forEach((li) =>{
    li.classList.remove('active');
    this.classList.add('active');
  })
}
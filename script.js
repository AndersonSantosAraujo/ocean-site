const btnTheme = document.querySelectorAll('.dark, .light');
const btnMenu = document.querySelectorAll('.open, .close');
const menuBackdrop = document.querySelector('.menu-backdrop');
const body = document.querySelector('body');

btnTheme.forEach((event) => event.addEventListener('click', mudarBtn));
btnMenu.forEach((event) => event.addEventListener('click', mudarBtn));

function mudarBtn() {
  const grupoBtn = this.parentElement;
  grupoBtn.children[0].classList.toggle('show');
  grupoBtn.children[1].classList.toggle('show');
  if (grupoBtn.classList[0] === 'menu') menuBackdrop.classList.toggle('ativo');
  if (grupoBtn.classList[0] === 'theme') body.classList.toggle('darkness');
}

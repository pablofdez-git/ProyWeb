let boxDisable = document.getElementByClass('norequeridos');
let toggleLink = document.getElementById('aviso');

function toggleBox() {
  if (boxDisable.style.display === 'none') {
    boxDisable.style.display = 'block';
    toggleLink.textContent = 'Inicio sesión';
  } else {
    boxDisable.style.display = 'none';
    toggleLink.textContent = 'Registro';
  }
}

toggleLink.addEventListener('click', toggleBox);




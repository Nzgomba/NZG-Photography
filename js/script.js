// ===== BURGER MENU TOGGLE =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function updatePreview() {
  const item = document.getElementById('item').value;
  const image = document.getElementById('previewImage');

  if (item === 'blue-tee') {
    image.src = 'blue-tee.png';
  } else if (item === 'black-hoodie') {
    image.src = 'Hoodie-Black.png';
  } else if (item === 'white-hoodie') {
    image.src = 'white-hoodie.jpg';
  } else {
    image.src = 'images/placeholder.png';
  }
}





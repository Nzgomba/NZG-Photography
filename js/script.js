// ===== BURGER MENU TOGGLE =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== ITEM PREVIEW LOGIC =====
function updatePreview() {
  const item = document.getElementById('item');
  const image = document.getElementById('previewImage');

  if (!item || !image) {
    console.error("Element not found: 'item' or 'previewImage'");
    return;
  }

  switch (item.value) {
    case 'blue-tee':
      image.src = 'blue-tee.png';
      break;
    case 'black-hoodie':
      image.src = 'Hoodie-Black.png';
      break;
    case 'white-hoodie':
      image.src = 'white-hoodie.jpg';
      break;
    default:
      image.src = 'imagesplaceholder.jpg';
  }
}

// ===== Add Event Listeners =====
const itemElement = document.getElementById('item');
if (itemElement) {
  ['change', 'input', 'keyup'].forEach(event =>
    itemElement.addEventListener(event, updatePreview)
  );
} else {
  console.error("Element with ID 'item' not found.");
}
// ===== Add Event Listener for Size Selection =====
const sizeElement = document.getElementById('size');  
if (sizeElement) {
  sizeElement.addEventListener('change', () => {
    const selectedSize = sizeElement.value;
    console.log(`Selected size: ${selectedSize}`);
  });
}
// ===== Add Event Listener for Quantity Selection =====
const quantityElement = document.getElementById('quantity');
if (quantityElement) {
  quantityElement.addEventListener('change', () => {
    const selectedQuantity = quantityElement.value;
    console.log(`Selected quantity: ${selectedQuantity}`);
  });
} else {
  console.error("Element with ID 'quantity' not found.");
}     
// ===== Add Event Listener for Submit Button =====
const submitButton = document.getElementById('submitButton'); 
if (submitButton) {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission for demo purposes
    const item = document.getElementById('item').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;

    console.log(`Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
  });
}
// ===== Add Event Listener for Form Submission =====
const orderForm = document.getElementById('orderForm');
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    const item = document.getElementById('item').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;

    console.log(`Form submitted with Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
  });
}
// ===== Add Event Listener for Document Ready =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('Document is ready');
  updatePreview(); // Initial preview update
});
// ===== Add Event Listener for Window Resize =====
window.addEventListener('resize', () => {
  console.log('Window resized');
  updatePreview(); // Update preview on resize
});
// ===== Add Event Listener for Window Load =====
window.addEventListener('load', () => {
  console.log('Window loaded');
  updatePreview(); // Update preview on window load
});



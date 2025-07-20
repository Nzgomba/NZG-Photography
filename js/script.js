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

// ===== Add Event Listener for Keydown =====
document.addEventListener('keydown', (event) => { 
  if (event.key === 'Escape') {
    console.log('Escape key pressed');
    // Add any additional logic for Escape key if needed
  }
} );
// ===== Add Event Listener for Clicks on the Document =====
document.addEventListener('click', (event) => {
  console.log(`Clicked at coordinates: (${event.clientX}, ${event.clientY})`);
  // Add any additional logic for clicks if needed
}); 
// ===== Add Event Listener for Mouseover on the Preview Image =====
const previewImage = document.getElementById('previewImage');
if (previewImage) {
  previewImage.addEventListener('mouseover', () => {
    console.log('Mouseover on preview image');
    // Add any additional logic for mouseover if needed
  });
} else {
  console.error("Element with ID 'previewImage' not found.");
}   
// ===== Add Event Listener for Mouseout on the Preview Image =====
if (previewImage) { 
  previewImage.addEventListener('mouseout', () => {
    console.log('Mouseout from preview image');
    // Add any additional logic for mouseout if needed
  });
}
// ===== Add Event Listener for Focus on the Item Select Element =====
if (itemElement) {
  itemElement.addEventListener('focus', () => {
    console.log('Item select element focused');
    // Add any additional logic for focus if needed
  });
}
// ===== Add Event Listener for Blur on the Item Select Element =====
if (itemElement) {
  itemElement.addEventListener('blur', () => {
    console.log('Item select element blurred');
    // Add any additional logic for blur if needed
  });
}
// ===== Add Event Listener for Form Reset =====
if (orderForm) {
  orderForm.addEventListener('reset', () => {
    console.log('Form reset');
    updatePreview(); // Reset preview on form reset
  });
}
// ===== Add Event Listener for Form Validation =====
if (orderForm) {
  orderForm.addEventListener('invalid', (event) => {
    event.preventDefault(); // Prevent default invalid behavior
    console.log('Form validation failed');
    // Add any additional logic for form validation if needed
  });
}
// ===== Add Event Listener for Form Validity Change =====
if (orderForm) {
  orderForm.addEventListener('change', () => {
    if (orderForm.checkValidity()) {
      console.log('Form is valid');
    } else {
      console.log('Form is invalid');
    }
  });
}
// ===== Add Event Listener for Form Submission Success =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      console.log('Form submitted successfully');
      // Add any additional logic for successful submission if needed
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission Failure =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (!orderForm.checkValidity()) {
      console.log('Form submission failed due to validation errors');
      // Add any additional logic for failed submission if needed
    }
  });
}
// ===== Add Event Listener for Form Reset Confirmation =====
if (orderForm) {
  orderForm.addEventListener('reset', (event) => {
    const confirmation = confirm('Are you sure you want to reset the form?');
    if (!confirmation) {
      event.preventDefault(); // Prevent reset if user cancels
      console.log('Form reset cancelled');
    } else {
      console.log('Form reset confirmed');
    }
  });
}
// ===== Add Event Listener for Form Submission Confirmation =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    const confirmation = confirm('Are you sure you want to submit the form?');
    if (!confirmation) {
      event.preventDefault(); // Prevent submission if user cancels
      console.log('Form submission cancelled');
    } else {
      console.log('Form submission confirmed');
    }
  });
}
// ===== Add Event Listener for Form Submission with AJAX =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const formData = new FormData(orderForm);
      console.log('Form data ready for AJAX submission:', Object.fromEntries(formData.entries()));
      // Simulate AJAX submission
      setTimeout(() => {
        console.log('Form submitted via AJAX');
      }, 1000);
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Fetch API =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const formData = new FormData(orderForm);
      console.log('Form data ready for Fetch API submission:', Object.fromEntries(formData.entries()));
      // Simulate Fetch API submission
      fetch('/submit-order', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Form submitted via Fetch API:', data);
      })
      .catch(error => {
        console.error('Error submitting form via Fetch API:', error);
      });
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Axios =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const formData = new FormData(orderForm);
      console.log('Form data ready for Axios submission:', Object.fromEntries(formData.entries()));
      // Simulate Axios submission
      axios.post('/submit-order', formData)
        .then(response => {
          console.log('Form submitted via Axios:', response.data);
        })
        .catch(error => {
          console.error('Error submitting form via Axios:', error);
        });
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with jQuery AJAX =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const formData = $(orderForm).serialize();
      console.log('Form data ready for jQuery AJAX submission:', formData);
      // Simulate jQuery AJAX submission
      $.ajax({
        url: '/submit-order',
        type: 'POST',
        data: formData,
        success: (data) => {
          console.log('Form submitted via jQuery AJAX:', data);
        },
        error: (error) => {
          console.error('Error submitting form via jQuery AJAX:', error);
        }
      });
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Vanilla JavaScript Fetch =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const formData = new FormData(orderForm);
      console.log('Form data ready for Vanilla JS Fetch submission:', Object.fromEntries(formData.entries()));
      // Simulate Vanilla JS Fetch submission
      fetch('/submit-order', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Form submitted via Vanilla JS Fetch:', data);
      })
      .catch(error => {
        console.error('Error submitting form via Vanilla JS Fetch:', error);
      });
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with XMLHttpRequest =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const formData = new FormData(orderForm);
      console.log('Form data ready for XMLHttpRequest submission:', Object.fromEntries(formData.entries()));
      // Simulate XMLHttpRequest submission
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/submit-order', true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          console.log('Form submitted via XMLHttpRequest:', xhr.responseText);
        } else {
          console.error('Error submitting form via XMLHttpRequest:', xhr.statusText);
        }
      };
      xhr.send(formData);
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}     
// ===== Add Event Listener for Form Submission with FormData API =====
if (orderForm) {                              
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const formData = new FormData(orderForm);
      console.log('Form data ready for FormData API submission:', Object.fromEntries(formData.entries()));
      // Simulate FormData API submission
      fetch('/submit-order', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Form submitted via FormData API:', data);
      })
      .catch(error => {
        console.error('Error submitting form via FormData API:', error);
      });
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Custom Validation =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const item = document.getElementById('item').value;
      const size = document.getElementById('size').value;
      const quantity = document.getElementById('quantity').value;

      if (item && size && quantity) {
        console.log(`Custom validation passed: Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
        // Add any additional logic for successful custom validation if needed
      } else {
        console.error('Custom validation failed: Missing required fields');
      }
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Custom Error Handling =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const item = document.getElementById('item').value;
      const size = document.getElementById('size').value;
      const quantity = document.getElementById('quantity').value;

      if (item && size && quantity) {
        console.log(`Custom error handling passed: Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
        // Add any additional logic for successful custom error handling if needed
      } else {
        console.error('Custom error handling failed: Missing required fields');
      }
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Custom Success Handling =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const item = document.getElementById('item').value;
      const size = document.getElementById('size').value;
      const quantity = document.getElementById('quantity').value;

      if (item && size && quantity) {
        console.log(`Custom success handling passed: Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
        // Add any additional logic for successful custom success handling if needed
      } else {
        console.error('Custom success handling failed: Missing required fields');
      }
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Custom Logic =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const item = document.getElementById('item').value;
      const size = document.getElementById('size').value;
      const quantity = document.getElementById('quantity').value;

      if (item && size && quantity) {
        console.log(`Custom logic executed: Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
        // Add any additional custom logic here
      } else {
        console.error('Custom logic failed: Missing required fields');
      }
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Custom Data Processing =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const item = document.getElementById('item').value;
      const size = document.getElementById('size').value;
      const quantity = document.getElementById('quantity').value;

      if (item && size && quantity) {
        console.log(`Custom data processing executed: Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
        // Add any additional custom data processing logic here
      } else {
        console.error('Custom data processing failed: Missing required fields');
      }
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Custom UI Updates =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const item = document.getElementById('item').value;
      const size = document.getElementById('size').value;
      const quantity = document.getElementById('quantity').value;

      if (item && size && quantity) {
        console.log(`Custom UI updates executed: Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
        // Add any additional custom UI update logic here
      } else {
        console.error('Custom UI updates failed: Missing required fields');
      }
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Custom Notifications =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const item = document.getElementById('item').value;
      const size = document.getElementById('size').value;
      const quantity = document.getElementById('quantity').value;

      if (item && size && quantity) {
        console.log(`Custom notifications executed: Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
        // Add any additional custom notification logic here
      } else {
        console.error('Custom notifications failed: Missing required fields');
      }
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Custom Analytics =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const item = document.getElementById('item').value;
      const size = document.getElementById('size').value;
      const quantity = document.getElementById('quantity').value;

      if (item && size && quantity) {
        console.log(`Custom analytics executed: Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
        // Add any additional custom analytics logic here
      } else {
        console.error('Custom analytics failed: Missing required fields');
      }
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Custom Error Logging =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const item = document.getElementById('item').value;
      const size = document.getElementById('size').value;
      const quantity = document.getElementById('quantity').value;

      if (item && size && quantity) {
        console.log(`Custom error logging executed: Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
        // Add any additional custom error logging logic here
      } else {
        console.error('Custom error logging failed: Missing required fields');
      }
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Custom Success Logging =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const item = document.getElementById('item').value;
      const size = document.getElementById('size').value;
      const quantity = document.getElementById('quantity').value;

      if (item && size && quantity) {
        console.log(`Custom success logging executed: Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
        // Add any additional custom success logging logic here
      } else {
        console.error('Custom success logging failed: Missing required fields');
      }
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
}
// ===== Add Event Listener for Form Submission with Custom Data Validation =====
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    if (orderForm.checkValidity()) {
      const item = document.getElementById('item').value;
      const size = document.getElementById('size').value;
      const quantity = document.getElementById('quantity').value;

      if (item && size && quantity) {
        console.log(`Custom data validation executed: Item: ${item}, Size: ${size}, Quantity: ${quantity}`);
        // Add any additional custom data validation logic here
      } else {
        console.error('Custom data validation failed: Missing required fields');
      }
    } else {
      console.log('Form submission failed due to validation errors');
    }
  });
} 

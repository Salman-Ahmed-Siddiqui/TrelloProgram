// Get form and product info display elements from the DOM
const productForm = document.getElementById("productForm");
const productNameDisplay = document.getElementById("productNameDisplay");
const productPriceDisplay = document.getElementById("productPriceDisplay");
const productDescriptionDisplay = document.getElementById("productDescriptionDisplay");
const productInfo = document.getElementById("productInfo");

// Add event listener to the form submission
productForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the values entered by the user
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productDescription = document.getElementById("productDescription").value;

  // Update the product info display
  productNameDisplay.textContent = productName;
  productPriceDisplay.textContent = productPrice;
  productDescriptionDisplay.textContent = productDescription;

  // Show the product info display
  productInfo.style.display = "block";

  // Reset the form
  productForm.reset();
});
In this example, we have an HTML file with a form for updating product information. The user can enter the product name, price, and description. When the form is submitted, the JavaScript code captures the values entered by the user and updates the product information display with the entered values.

The CSS file styles the elements,



<link rel="stylesheet" type="text/css" href="styles.css"></link>



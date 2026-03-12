// ===============================
// SELECT IMPORTANT DOM ELEMENTS
// ===============================

// Buttons
let plusBtns = document.querySelectorAll(".fa-plus-circle");
let minusBtns = document.querySelectorAll(".fa-minus-circle");
let deleteBtns = document.querySelectorAll(".fa-trash-alt");
let likeBtns = document.querySelectorAll(".fa-heart");

// Total price display
let totalDisplay = document.querySelector(".total");

// Cart items counter in navbar
let cartCount = document.getElementById("cart-count");


// =================================
// FUNCTION TO UPDATE TOTAL PRICE
// =================================

function updateTotal(){

  // Select all products
  const products = document.querySelectorAll(".list-products .card");

  let total = 0;
  let count = 0;

  products.forEach(function(product){

    // Get price and quantity for each product
    let price = parseInt(product.querySelector(".unit-price").innerText);
    let quantity = parseInt(product.querySelector(".quantity").innerText);

    // Calculate total price
    total += price * quantity;

    // Count total items
    count += quantity;

  });

  // Update DOM
  totalDisplay.innerText = total + " $";
  cartCount.innerText = count;

}



// =================================
// INCREASE QUANTITY
// =================================

plusBtns.forEach(function(btn){

  btn.addEventListener("click", function(){

    // Find quantity element
    let quantitySpan = btn.nextElementSibling;

    let quantity = parseInt(quantitySpan.innerText);

    quantity++;

    quantitySpan.innerText = quantity;

    // Recalculate total
    updateTotal();

  });

});



// =================================
// DECREASE QUANTITY
// =================================

minusBtns.forEach(function(btn){

  btn.addEventListener("click", function(){

    let quantitySpan = btn.previousElementSibling;

    let quantity = parseInt(quantitySpan.innerText);

    // Prevent negative numbers
    if(quantity > 0){
      quantity--;
      quantitySpan.innerText = quantity;
    }

    updateTotal();

  });

});



// =================================
// DELETE PRODUCT
// =================================

deleteBtns.forEach(function(btn){

  btn.addEventListener("click", function(){

    // Find the product card
    let productCard = btn.closest(".card");

    // Remove the product container
    productCard.parentElement.remove();

    // Update totals after deletion
    updateTotal();

  });

});


// =================================
// LIKE PRODUCT
// =================================

likeBtns.forEach(function(btn){

  btn.addEventListener("click", function(){

    // Toggle heart color
    btn.classList.toggle("liked");

  });

});
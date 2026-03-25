// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  const price = product.querySelector('.price span');

  const quantity = product.querySelector('.quantity input');

  const priceNumber = Number(price.innerText);
  const quantityNumber = Number(quantity.value);


  const subtotalPrice = priceNumber * quantityNumber;


  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = subtotalPrice;

  return subtotalPrice;

}

function calculateAll() {
  /* code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test */

  // ITERATION 2

  const products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }

  
  // ITERATION 3

  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }
  
const totalValue = document.querySelector('#total-value span');

totalValue.innerText = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

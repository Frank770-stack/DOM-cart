// define the buttons
const plusButton = Array.from(
  document.getElementsByClassName("fas fa-plus-circle")
);
const minusButton = Array.from(
  document.getElementsByClassName("fas fa-minus-circle")
);
const trashButton = Array.from(
  document.getElementsByClassName("fas fa-trash-alt")
);
const likeButton = Array.from(document.getElementsByClassName("fas fa-heart"));

trashButton.forEach((button, index) => {
  button.addEventListener("click", function () {
    console.log("Trash button clicked");
    const productCard = document.getElementsByClassName("quantity");
    const quantityElement = productCard;
    quantityElement[index].textContent = "0";
    updateTotalPrice();
  });
});
likeButton.forEach((button, index) => {
  button.addEventListener("click", function () {
    this.style.color = "red";
  });
});
minusButton.forEach((button, index) => {
  button.addEventListener("click", function () {
    const productQuantity = document.getElementsByClassName("quantity");
    const quantityElements = productQuantity;
    let quantity = parseInt(quantityElements[index].innerHTML);
    if (quantity > 0) {
      quantity--;
      quantityElements[index].textContent = quantity;
      updateTotalPrice(itemPrice);
      console.log("Minus button clicked");
    }
  });
});
plusButton.forEach((button, index) => {
  button.addEventListener("click", function () {
    const productQuantity = document.getElementsByClassName("quantity");
    const quantityElements = productQuantity;
    let quantity = parseInt(quantityElements[index].innerHTML);
    console.log(quantity);
    quantity++;
    quantityElements[index].innerHTML = quantity;
    updateTotalPrice(itemPrice);
    console.log("plusButton clicked");
    console.log(quantity);
  });
});
function updateTotalPrice(amount, isAdding) {
  let currentTotal = parseInt(
    document.getElementsByClassName("total").textContent
  );
  let newTotal = isAdding ? currentTotal + amount : currentTotal - amount;
  document.getElementsByClassName("total").textContent = newTotal;
}

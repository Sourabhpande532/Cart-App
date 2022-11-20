/** @format */

let count = document.querySelector(".count");
let userOnClick = document.querySelectorAll(".addItem");

let cartStoreContainer = {};
let container = [];
for (let item of userOnClick) {
  item.addEventListener("click", () => {
    let cartAccess = item.parentElement.parentElement;
    // console.log(cartAccess);
    let img = cartAccess.previousElementSibling.firstElementChild;
    let productName = cartAccess.firstElementChild;
    // console.log(productName);
    let productInfo = productName.nextElementSibling;
    // console.log(productInfo);
    let filterPrice = productInfo.nextElementSibling.firstElementChild;
    // console.log(filterPrice);
    let realPrice = filterPrice.nextElementSibling;
    // console.log(realPrice);
    let offer = realPrice.nextElementSibling;
    // console.log(offer);

    cartStoreContainer.productName = productName.textContent;
    cartStoreContainer.productInfo = productInfo.textContent;
    cartStoreContainer.filterPrice = filterPrice.textContent;
    cartStoreContainer.realPrice = realPrice.textContent;
    cartStoreContainer.offer = offer.textContent;
    // console.log(cartStoreContainer);
    container.push(cartStoreContainer);
    // console.log(container);
    localStorage.setItem("cartItem", JSON.stringify(container));

    let reFetchCart = localStorage.getItem("cartItem");
    // console.log(reFetchCart);
    if (reFetchCart === null) {
      container = [];
    } else {
      container = JSON.parse(reFetchCart);
      // console.log(container) //turn to a string to object
    }
    alert("successFully Done");
    cartCounter();
  });
}

function cartCounter() {
  let reFetchCart = localStorage.getItem("cartItem");
  // console.log(reFetchCart);
  if (reFetchCart === null) {
    container = [];
  } else {
    container = JSON.parse(reFetchCart);
    // console.log(container) //turn to a string to object
  }

  if (container.length === 0) {

  } else {
    count.style.display = "block";
    count.innerHTML = container.length;
  }
}
cartCounter();

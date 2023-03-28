const products = [
  { name: "Parle-G", price: 20 },
  { name: "Sunfeast", price: 50 },
  { name: "Unibic", price: 30 },
];

let cartList = [];

const product = document.querySelector("#product");
const input = document.querySelector("#cost");
const quantity = document.querySelector("#quantity");
const button = document.querySelector("button");
const tbody = document.querySelector("tbody");

let html = ``;
products.forEach((product) => {
  html += `<option value="${product.name}">${product.name}</option>`;
});
product.innerHTML += html;

for (let i = 1; i <= 10; i++) {
  html = ``;
  html += `<option value="${i}">${i}</option>`;
  quantity.innerHTML += html;
}
input.value = products[0].price;

product.addEventListener("change", (e) => {
  products.forEach((product) => {
    if (product.name === e.target.value) {
      input.value = product.price;
    }
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(checkProductExistInCart(product.value));
  if (!checkProductExistInCart(product.value)) {
    addProductToArray(product.value, quantity.value);
    updateCart();
  } else {
    alert("Item already in cart");
  }
});

function updateCart() {
  let html = ``;
  if (cartList.length != 0) {
    for (let i = 0; i < cartList.length; i++) {
      html += `<tr>
                <td>${cartList[i].name}</td>
                <td>
                    <button id="incr" btnName="${cartList[i].name}" class="btn btn-primary btn-sm">+</button>
                    &nbsp;${cartList[i].quantity}&nbsp;
                    <button id="decr" btnName="${cartList[i].name}" class="btn btn-primary btn-sm">-</button>
                </td>
                <td>${cartList[i].unitPrice}</td>
                <td>${cartList[i].subTotal}</td>
                <td ><i id="${cartList[i].name}" class="fa-solid fa-trash"></i></td>
                 </tr>`;
    }
  }

  tbody.innerHTML = html;
  updateCartValue();
}

function checkProductExistInCart(product) {
  if (cartList.length != 0) {
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].name === product) {
        return true;
      }
    }
  }
  return false;
}

function addProductToArray(name, qty) {
  let price = 0;
  products.forEach((product) => {
    if (product.name === name) {
      price = product.price;
    }
  });
  let temp = {
    name: name,
    quantity: qty,
    unitPrice: price,
    subTotal: qty * price,
  };
  cartList.push(temp);
}

tbody.addEventListener("click", (e) => {
  if (e.target.localName == "i") {
    cartList = cartList.filter((item) => {
      return item.name != e.target.getAttribute("id");
    });
    updateCart();
  }

  if (e.target.localName == "button") {
    const id = e.target.getAttribute("id");
    const prod = e.target.getAttribute("btnName");
    if (id == "incr") {
      console.log(id, prod);
      updateQuantity(1, prod);
    }
    if (id == "decr") {
      updateQuantity(-1, prod);
    }
  }
});

function updateQuantity(quantity, product) {
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].name === product) {
      const qty = parseInt(cartList[i].quantity) + parseInt(quantity);
      if (qty > 0) {
        cartList[i].quantity = qty;
        const price = parseInt(cartList[i].unitPrice);
        cartList[i].subTotal = qty * price;
        updateCart();
      } else {
        alert(
          "Quantity should be equal to or greater than 1.However, you can always delete item from cart"
        );
      }
    }
  }
}

function updateCartValue() {
  let total = 0;
  const cartTotal = document.querySelector("#cartTotal");
  cartList.forEach(line=>{
    total+=line.subTotal;
  });
  cartTotal.innerText = "Total Cart Value : " + total + " Rs.";
}

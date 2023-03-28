let products = [
    { name: "Parle Biscuit", price: 10 },
    { name: "Jim-Jam", price: 20 },
    { name: "Dark-Fantasy", price: 35 },
    { name: "Bourbon", price: 30 },
  ];

  let productCart = [];
  
  const item = document.getElementById("item");
  const unitPrice = document.querySelector("input");
  item.addEventListener("change", () => {
    const selectedItem = products.find((product) => product.name === item.value);
    unitPrice.value = selectedItem.price;
  });
  const quantity = document.getElementById("quantity");
  const button = document.querySelector("button");
  const prodTable = document.querySelector("table");
  const prodTableBody = prodTable.querySelector("tbody");
  const removeButtons = prodTable.querySelectorAll("#bt");
  
  button.addEventListener("click", () => {
    const selectedItem = products.find((product) => product.name === item.value);
    const subTotal = selectedItem.price * quantity.value;
    productCart.push(selectedItem.name, quantity.value, selectedItem.price, subTotal)
    console.log(productCart);
  
    const newRow = prodTableBody.insertRow();
   
    
  
    newRow.innerHTML = `
        <td>${selectedItem.name}</td>
        <td>${quantity.value}</td>
        <td>${selectedItem.price}</td>
        <td>${subTotal}</td>
        <td><button id = "bt">Remove</button></td>
        `;
  
    const removeButton = newRow.querySelector("#bt");
    removeButton.addEventListener("click", () => {
      newRow.remove();
    });
  
    var totalPrice = document.querySelector("#value");
    var cal = 0;
    for (let i = 0; i <=productCart.length; i++) {
      cal = cal + productCart[2];
    }
  
    totalPrice.innerHTML = "Total Price : "+cal;
  });
  
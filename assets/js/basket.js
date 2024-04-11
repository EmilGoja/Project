
const table = document.getElementById("elemCon");
const comingBasketData = JSON.parse(localStorage.getItem("basket"));
let tr = "";
let div = "";
let tableElem = "";
if(comingBasketData===null){
  div +=`<div class="empty-basket">
  <i class="fa-solid fa-box-open"></i>
  <h1>YOUR CART IS CURRENTLY EMPTY.</h1>
  <a href="../index.html">Return to shop</a>
</div>`
  table.innerHTML = div;
}else{
  tableElem +=`
  <table class="basket-table">
  <thead>
      <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
      </tr>
  </thead>
  <tbody></tbody>
  </table>`
  table.innerHTML = tableElem;
  const tbody = document.querySelector("tbody");
  comingBasketData.map((i,c)=>{
    tr+=`  <tr class="product-row">
    <th scope="row">${c+1}</th>
    <td><img width="70" src="${i.image}"/></td>
    <td>${i.name}</td>
    <td>${i.price}$</td>
  </tr>`
  tbody.innerHTML = tr;
})
}
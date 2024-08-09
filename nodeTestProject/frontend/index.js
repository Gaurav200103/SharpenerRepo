

async function displayProduct(){
  const res = await fetch("http://localhost:3000/getProducts");
  const product = await res.json();

  const ul = document.getElementById("ul");
  ul.innerHTML = "";

  product.products.forEach(product=>{
    let li = document.createElement("li");
    li.innerHTML = `<p> ${product.name} - ${product.description} - ${product.price} - ${product.quantity} - <button onClick="buyProduct(${product.id}, ${1})">BUYONE</button> - <button onClick="buyProduct(${product.id}, ${2})">BUY2</button> - <button onClick="buyProduct(${product.id}, ${3})">BUY3</button>`

    ul.append(li);
  })
}

async function buyProduct(id, quantity){
  await fetch(`http://localhost:3000/updateQuantity/${id}/${quantity}`, {method:"PATCH"});

  displayProduct();
}

async function itemHandler(){
  event.preventDefault();

  const elements = event.target.elements;

  const object = {
    name : elements.name.value,
    price : elements.price.value,
    quantity : elements.quantity.value,
    description : elements.description.value
  }

  await fetch("http://localhost:3000/addProduct", {
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(object)
  })

  displayProduct();
}

displayProduct();
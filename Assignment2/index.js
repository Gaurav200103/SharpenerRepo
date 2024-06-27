
let form = document.querySelector("form");
let h1 = document.querySelector("#total");
h1.textContent = `Total : 0`;

form.addEventListener("submit", function(event){
  event.preventDefault();

  let {name, price, quantity} = event.target;

  let obj = {
    name: name.value,
    price: price.value,
    quantity: quantity.value
  }

  fetch("https://crudcrud.com/api/12b6430b3c0e42d5880bf68165e164a6/vegetable", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj)
  }).then((res)=> displayValue());

  

  
})

displayValue();

async function displayValue(){
  let ul = document.querySelector("ul");
  ul.innerHTML = "";

  let list =await fetch("https://crudcrud.com/api/12b6430b3c0e42d5880bf68165e164a6/vegetable").then((res)=> res.json()).then((res)=> res);

  
  // console.log(list);
  list.forEach((item, i)=>{
    console.log(item._id);
    let li = document.createElement("li");
    li.innerHTML = `name : ${item.name}  price : ${item.price} quantity : ${item.quantity} <input type="number" class="input" /> <button class="buy-btn" onclick="editfun('${""+item._id}', '${item.quantity}','${item.name}','${item.price}', ${i})">BUY</button> <button onclick="deletefun('${item._id}')" class="delete-btn">DELETE</button>`;
    ul.append(li);
  })

  h1.textContent = `Total : ${list.length}`
}





function editfun(id, quantity, name, price, j){

  let inputs = document.querySelectorAll(".input");

  for(let i=0; i<inputs.length; i++){
    if(i == j){
      console.log(inputs[i].value);

      let obj = {
        name:name,
        price: price,
        quantity : quantity- inputs[i].value
      }

      fetch(`https://crudcrud.com/api/12b6430b3c0e42d5880bf68165e164a6/vegetable/${id}`, {
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify(obj)
      }).then((res)=> displayValue())
    }
  }

}



function deletefun(id){
  
  fetch(`https://crudcrud.com/api/12b6430b3c0e42d5880bf68165e164a6/vegetable/${id}`,{
    method:"DELETE"
  }).then((res)=> {
    displayValue();
    console.log("deleted", id);
  });
}
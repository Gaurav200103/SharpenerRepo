
let form = document.querySelector("form");
let ul = document.querySelector("ul");
let list = JSON.parse(localStorage.getItem("expence")) || [];


function addtoList(){

  ul.innerHTML = "";

  let list = JSON.parse(localStorage.getItem("expence")) || [];
  
  for(let i=0; i<list.length; i++){
    let li = document.createElement("li");
  li.className = "expence-value";
  li.innerHTML = `${list[i].expence}-${list[i].category}-${list[i].description}-<button class="delete-btn" onclick="deletefun(${i})">delete</button><button class="edit-btn" onclick="editfun(${i})">edit</button>`;

  ul.append(li);
  }


}


function deletefun(i){
  
  list = list.filter((item, x)=>{
    
    return i!= x;
  })

  console.log(list);

  localStorage.setItem("expence", JSON.stringify(list));

  addtoList();
}

function editfun(i){

  let value = list.filter((item, x)=>{
    return i == x;
  })

  let newList = list.filter((m,n)=>{
    return i != n;
  })
  value = value[0];

  document.getElementById("expence").value = value.expence;

  document.getElementById("category").value = value.category;

  document.getElementById("description").value = value.description;

  
  localStorage.setItem("expence", JSON.stringify(newList));
  
  addtoList();
}

addtoList();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let list = JSON.parse(localStorage.getItem("expence")) || [];

  console.log(list);
  let { category, expence, description } = event.target;

  let obj = {
    category: category.value,
    expence: expence.value,
    description: description.value
  }



  list.push(obj);

  console.log(JSON.stringify(list));

  localStorage.setItem("expence", JSON.stringify(list));

  addtoList();

})
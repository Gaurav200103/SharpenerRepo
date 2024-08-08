

async function addtoList(){

  ul.innerHTML = "";

  let list =await fetch("http://localhost:8000/getExpences");
  
  list = await list.json();
  console.log(list);

  list = list.expences;
  for(let i=0; i<list.length; i++){
    let li = document.createElement("li");
  li.className = "expence-value";
  li.innerHTML = `${list[i].expence}-${list[i].type}-${list[i].description}-<button class="delete-btn" onclick="deletefun(${list[i].id})">delete</button><button class="edit-btn" onclick="editfun(${list[i].id})">edit</button>`;

  ul.append(li);
  }


}


async function deletefun(i){
  
  await fetch(`http://localhost:8000/deleteExpence/${i}`, {
    method:"DELETE",
  })

  addtoList();
}

function editfun(id){
  

  document.getElementById("expence").value = value.expence;

  document.getElementById("category").value = value.category;

  document.getElementById("description").value = value.description;

  
  localStorage.setItem("expence", JSON.stringify(newList));
  
  addtoList();
}

addtoList();

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  let { category, expence, description } = event.target;

  const object = {
    type : category.value,
    expence : expence.value,
    description: description.value,
  }

  await fetch('http://localhost:8000/addExpence',{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body: JSON.stringify(object)
  });

  addtoList();

})




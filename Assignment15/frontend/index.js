
const formHandler = async ()=>{
  event.preventDefault();

  const formElement = event.target.elements;

  const username = formElement.username.value;
  const email = formElement.email.value;
  const phone = formElement.phone.value;

  await fetch("http:/localhost:3000/addUser", {
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({username, phone, email})
  });

  let ul = document.getElementById("ul");
  ul.innerHTML = '';
  displayUser();
}


const displayUser = async ()=>{
  const res = await fetch("http:/localhost:3000/getUsers");
  const {users} = await res.json();
  let ul = document.getElementById("ul");
  users.forEach(item =>{
    let li = document.createElement("li");
    li.innerHTML = `<p>${item.id}-${item.username}-${item.phone}-${item.email}<p><button onclick='editfun(${item.id})'>edit</button><button onclick='deletefun(${item.id})'>delete</button>`;
    ul.append(li);
  })
}

const deletefun = async (id)=>{
  await fetch(`http:/localhost:3000/deleteUser/${id}`, {
    method:"DELETE",
  })

  let ul = document.getElementById("ul");
  ul.innerHTML = "";
  displayUser();
}

const editfun = async (id)=>{
  let res = await fetch(`http:/localhost:3000/getUser/${id}`);
  const {user} = await res.json();
  
  const inputs = document.getElementsByTagName("input");

  inputs[0].value= user.username;
  inputs[1].value= user.phone;
  inputs[2].value= user.email;
  
  deletefun(id);
  let ul = document.getElementById("ul");
  ul.innerHTML= "";
}

displayUser();
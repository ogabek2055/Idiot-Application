let inputName = document.getElementById("name");
let inputPrice = document.getElementById("price");
let textarea = document.getElementById("textarea");
let idiotDb = [];

function addIdiot() {
  let name = inputName.value;
  let value = inputPrice.value;
  let text = textarea.value;
  if (name == "" || value == "" || textarea.value == "") {
    alert("Please enter idiot Price or idiot Name");
  } else {
    let idiotObj = {
      name: name,
      price: value,
      text: text,
    };
    idiotDb.push(idiotObj);
    alert(`${idiotObj.name} successfully added!`);
    console.log(idiotDb);

    inputName.value = "";
    inputPrice.value = "";
    textarea.value = "";
  }
}

function renderProducts() {
  const products = document.getElementById("idiotList");
  products.innerHTML = "";
  for (let i = 0; i < idiotDb.length; i++) {
    const templete = `
    <li>
    <h2><span>Name: </span>${idiotDb[i].name}</h2>
    <h3><span>Price: </span>${idiotDb[i].price} $</h3>
    <h4><span>About: </span>${idiotDb[i].text}</h4>
  </li>
 
    `;
    products.innerHTML = products.innerHTML + templete;
  }
  if (products.innerHTML == "") {
    alert("Hech qanday idiot mahsulot mavjud emas !");
  }
}

// const formEl = document.getElementById("idiotForm");
// formEl.addEventListener("submit", (event) => {
//  event.preventDefault();
//  const idiotName = event.target.value[0];
//  const price = event.target.value[0];

//  const idiotObj = {
//   username: idiotName,
//   price: price,
//  }
//  idiotDb.push(idiotObj);
//  console.log(idiotDb);
// })

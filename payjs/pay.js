let nop = document.querySelector(".mop");

let aaaa = JSON.parse(localStorage.getItem("emailya"));
console.log(aaaa);
nop.innerText = aaaa;

document.querySelector("form").addEventListener("submit", okkkk);

let form = document.querySelector("form");
function okkkk(event) {
  event.preventDefault();
  let card_no = form.cardno.value;
  let cvv = form.cvv.value;

  if (card_no == "1234567812345678" && cvv == "123") {
    alert("Please wait transaction is going on...")
    setTimeout(function () {
      alert("Success")
      window.location.href = "./success.html"
    },6000)

 
  } else {
    alert("Invalid card number");
  }
}

let data = JSON.parse(localStorage.getItem("price"));
console.log(data);
let h1 = document.getElementById("laao");
h1.innerText = data.value;
let h5 = document.querySelector(".lto");
h5.innerText = data.value;
let h51 = document.querySelector(".lto2");
h51.innerText = data.value;
let h52 = document.querySelector(".lto3");
h52.innerText = data.value;

function dabao_img() {
  window.location.href = "./index.html";
}

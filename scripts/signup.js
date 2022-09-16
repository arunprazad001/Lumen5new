//Check Password strength:--------
function valuate(pwd) {
  let t = pwd.value;
  let id = getStrength(t);

  let message = new Array(4);
  message[0] = "Password too short!";
  message[1] = "Password poor!";
  message[2] = "Password medium!";
  message[3] = "Password strong!";
  let myPWD = document.getElementById("showStrength");
  setTimeout(function () {
    myPWD.innerText = "Strength: " + message[id];
  }, 1000);
}
function getStrength(p) {
  if (p.length < 4) {
    return 0;
  }
  var level = 0;
  if (p.match(/[a-z]/gi)) {
    level++;
  }
  if (p.match(/[0-9]/gi)) {
    level++;
  }
  if (p.match(/(.[^a-z0-9])/gi)) {
    level++;
  }
  if (p.length < 6 && level > 0) {
    level--;
  }
  return level;
}
//.................done....strength check done.......
document.querySelector("form").addEventListener("submit", signup);

function signup(e) {
  e.preventDefault();
  let form = document.querySelector("form");
  let name = form.name.value;
  let email = form.email.value;
  let pass = form.password.value;
  let gop = new data(name, email, pass);
    console.log(gop);
    let arr = JSON.parse(localStorage.getItem("users")) || [];
    arr.push(gop);
    localStorage.setItem("users", JSON.stringify(arr));
    window.location.href="login.html"
}
function data(n, e, p) {
  this.name = n;
  this.email = e;
  this.password = p;
}

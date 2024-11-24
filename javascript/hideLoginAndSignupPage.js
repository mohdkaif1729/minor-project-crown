const loginAndSignContainer = document.querySelector("#LaS");
console.log(loginAndSignContainer);
const notLaS = document.querySelector("#notLaS");
console.log(notLaS);

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

if (user?.isLogedIn) {
  loginAndSignContainer.style.display = "none";
  notLaS.style.display = "block";
} else {
  loginAndSignContainer.style.display = "flex";
  notLaS.style.display = "none";
}
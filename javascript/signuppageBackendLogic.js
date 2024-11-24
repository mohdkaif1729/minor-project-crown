// ****************************** sign-up user code

const signuppage = document.querySelector("#signuppage");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signup = document.querySelector(".signup");

signuppage.addEventListener("submit", async (e) => {
  e.preventDefault();
  signup.setAttribute("disabled", "");
  console.log(fullName.value);
  console.log(email.value);
  console.log(password.value);

  try {
    const userSignUp = {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
    };

    fullName.value = "";
    email.value = "";
    password.value = "";

    const user = await fetch("http://localhost:8000/api/v1/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userSignUp),
    });
    console.log("user: ", user);
    console.log("user: ", user.status);

    if (user.status === 201) {
      alert("You are registered successfully please login!");
      signup.removeAttribute("disabled");
      window.location.href = "/";
    } else if (user.status === 500) {
      alert("User with email is already registered!");
      signup.removeAttribute("disabled");
    }
  } catch (error) {
    console.error("Error while registering user: ", error.message || error);
  }
});

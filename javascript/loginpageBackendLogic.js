// ****************************** login user code

const loginpage = document.querySelector("#loginpage");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login = document.querySelector("#loginbtn");

if (loginpage) {
  loginpage.addEventListener("submit", async (e) => {
    e.preventDefault();
    login.setAttribute("disabled", "");

    try {
      const userSignUp = {
        email: email.value,
        password: password.value,
      };

      email.value = "";
      password.value = "";

      const user = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userSignUp),
        credentials: "include", // Include cookies in request
      });

      console.log("headers", user);

      if (user?.ok) {
        alert("You are logged in successfully!");
        login.removeAttribute("disabled");

        const userLoginInfo = {
          isLogedIn: true,
        };

        localStorage.setItem("user", JSON.stringify(userLoginInfo));
        window.location.href = "/"; // Redirect to home
      } else {
        const errorData = await user.json();
        alert(`Error: ${errorData.message || "An error occurred"}`);
        login.removeAttribute("disabled");
      }
    } catch (error) {
      console.error("Error during login:", error.message || error);
      login.removeAttribute("disabled");
    }
  });
}

const logout = document.querySelector(".logout");

logout.addEventListener("click", async () => {
  try {
    const user = await fetch("http://localhost:8000/api/v1/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Include cookies in request
    });

    if (user?.ok) {
      alert("You are logged out successfully!");

      const userLoginInfo = {
        isLogedIn: false,
      };

      localStorage.setItem("user", JSON.stringify(userLoginInfo));
      window.location.href = "/";
    } else {
      const errorData = await user.json();
      alert(`Error: ${errorData.message || "An error occurred"}`);
    }
  } catch (error) {
    console.error("Error during login:", error.message || error);
  }
});

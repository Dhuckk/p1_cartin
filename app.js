const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const form = document.querySelector(".sign-in-form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form submission

  // Retrieve the entered username and password
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // Validate the username and password
  // Replace the following condition with your validation logic
  if (username === "example" && password === "password") {
    // Redirect to the landing page
    window.location.href = "https://saydnaya.amnesty.org/?kind=explore";
  } else {
    // Display an error message
    alert("Invalid username or password. Please try again.");
  }
});

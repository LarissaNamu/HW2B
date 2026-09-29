
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Client-side validation
  if (!email || !password) {
    message.textContent = "All fields are required.";
    return;
  }

  if (!email.includes("@")) {
    message.textContent = "Please enter a valid email.";
    return;
  }

  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    return;
  }

  // Send inputs to the backend for server-side validation
  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    message.textContent = data.message;
  } catch (error) {
    message.textContent = "Unable to connect to the server.";
  }
});

// Replace this with your deployed backend URL on Render
const BACKEND_URL = "https://application-6169.onrender.com/";

// ====== Register ======
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  try {
    const res = await fetch(`${https://application-6169.onrender.com/}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    alert(data.message || "Registered successfully!");
  } catch (err) {
    console.error(err);
    alert("Failed to register. Check console for errors.");
  }
});

// ====== Login ======
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const res = await fetch(`${https://application-6169.onrender.com/}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    alert(data.message || "Login successful!");
  } catch (err) {
    console.error(err);
    alert("Failed to login. Check console for errors.");
  }
});

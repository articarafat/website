function showMessage() {
    alert("Hello from GitHub Pages!");
}

// Simple login validation
function loginUser() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Hardcoded credentials (for demo only)
    if (user === "admin" && pass === "1234") {
        alert("Login successful!");
        window.location.href = "index.html"; // redirect
        return false;
    } else {
        document.getElementById("message").innerText = "Invalid credentials";
        return false;
    }
}
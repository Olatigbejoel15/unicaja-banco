// Login Logic
function handleLogin() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');
  const loader = document.getElementById('loader');

  if (email === "stevejameszuks158@hotmail.com" && password === "zuks158158@$") {
    errorMsg.classList.add("d-none");
    loader.classList.remove("d-none");

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);
  } else {
    errorMsg.classList.remove("d-none");
  }
}

// Dashboard Restrictions
function showPaymentMessage() {
  document.getElementById("paymentModal").classList.remove("d-none");
}

function showOfficerMessage() {
  document.getElementById("officerMessage").classList.remove("d-none");
}

// Log out
function logout() {
  window.location.href = "index.html";
}
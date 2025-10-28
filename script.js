// Correct credentials
const correctEmail = "walterwashingtoncho@gmail";
const correctPassword = "walter158@$";
const correctCode = "1172"; // change if needed

function handleLogin() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (email === correctEmail && password === correctPassword) {
    errorMsg.classList.add("d-none");
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('codeBox').style.display = 'block';
  } else {
    errorMsg.classList.remove("d-none");
  }
}

function verifyCode() {
  const code = document.getElementById('code').value.trim();
  const codeError = document.getElementById('codeError');

  if (code === correctCode) {
    codeError.classList.add("d-none");
    document.getElementById('codeBox').style.display = 'none';
    document.getElementById('loader').style.display = 'flex';

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);
  } else {
    codeError.classList.remove("d-none");
  }
}

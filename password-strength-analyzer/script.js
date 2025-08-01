function checkStrength() {
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  let message = '';
  if (strength <= 2) {
    message = "Weak password";
    result.style.color = "red";
  } else if (strength === 3 || strength === 4) {
    message = "Moderate password";
    result.style.color = "orange";
  } else {
    message = "Strong password";
    result.style.color = "green";
  }

  result.innerText = message;
}

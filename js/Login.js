const LoginFormData = document.getElementById("Login-Form-Data")
const errorMessage = document.getElementById("error-message")
const successMessage = document.getElementById("success-message")

LoginFormData.addEventListener("submit", async (e) => {
  e.preventDefault()

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;


  errorMessage.innerHTML = ""
  errorMessage.classList.remove("active")
  successMessage.innerHTML = ""
  successMessage.classList.remove("active")

  if(username === ""){
    errorMessage.innerHTML = "Please enter your username"
    errorMessage.classList.add("active")
    return
  }
  
  if(password === ""){
    errorMessage.innerHTML = "Please enter your email address"
    errorMessage.classList.add("active")
    return
  }
  
  if(username.length < 5){
    errorMessage.innerHTML = "Username should be at least 5 characters long"
    errorMessage.classList.add("active")
    return
  }
  
  if(password.length  < 6){
    errorMessage.innerHTML = "Password should be at least 6 characters long"
    errorMessage.classList.add("active")
    return
  }

  successMessage.innerHTML = "Login successful!";
  successMessage.classList.add("active");
  LoginFormData.reset();
  setTimeout(() => {
    successMessage.classList.remove("active");
  }, 3000);

  const LoginFormData = {
    username: username,
    password: password
  }
  
  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(LoginFormData)
    })

    const data = await response.json()
    if(data.error){
      errorMessage.innerHTML = data.message;
      errorMessage.classList.add("active");
      return;
    } else {
      successMessage.innerHTML = "Login successful!";
      successMessage.classList.add("active");
      setTimeout(() => {
        successMessage.classList.remove("active");
      }, 3000);
      LoginFormData.reset();
      localStorage.setItem('username', data.username)
      localStorage.setItem('token', data.token)
      window.location.href = "/"
      username.innerText = data.username
    }
  } catch (error) {
    errorMessage.innerHTML = "Network error. Please try again later.";
    errorMessage.classList.add("active");
    console.error("Error:", error);
  }
  
})


const Login = document.getElementById('Login');
const menuLogin = document.getElementById('menu-Login');
const Logout = document.getElementById('Logout');
const menuLogout = document.getElementById('menu-Logout');
const username = document.getElementById('username');

const storedUsername = localStorage.getItem('username');
const storedToken = localStorage.getItem('token');

if (storedUsername && storedToken) {
  username.innerText = storedUsername;
  Login.style.display = "none";
  menuLogin.style.display = "none";
  Logout.style.display = "block";
  menuLogout.style.display = "block";
} else {
  Login.style.display = 'block';
  menuLogin.style.display = 'block';
  Logout.style.display = 'none';
  menuLogout.style.display = 'none';
}

Logout.addEventListener('click', () => {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  username.innerText = '';
  Login.style.display = 'block';
  menuLogin.style.display = 'block';
  Logout.style.display = 'none';
  menuLogout.style.display = 'none';
  alert('You have been logged out');
});

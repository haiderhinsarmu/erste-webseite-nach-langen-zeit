const Login = document.getElementById('Login');
const Logout = document.getElementById('Logout');
const username = document.getElementById('username');

const storedUsername = localStorage.getItem('username');
const storedToken = localStorage.getItem('token');

if (storedUsername && storedToken) {
  username.innerText = storedUsername;
  Login.style.display = "none";
  Logout.style.display = "block";
} else {
  Login.style.display = 'block';
  Logout.style.display = 'none';
}

Logout.addEventListener('click', () => {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  username.innerText = '';
  Login.style.display = 'block';
  Logout.style.display = 'none';
  alert('You have been logged out');
});

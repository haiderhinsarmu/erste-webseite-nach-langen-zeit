const ContactFormData = document.getElementById("Contact-Form-Data")
const errorMessage = document.getElementById("error-message")
const successMessage = document.getElementById("success-message")

ContactFormData.addEventListener("submit", async (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  errorMessage.innerHTML = ""
  errorMessage.classList.remove("active")
  successMessage.innerHTML = ""
  successMessage.classList.remove("active")

  if(name === ""){
    errorMessage.innerHTML = "Please enter your name"
    errorMessage.classList.add("active")
    return
  }

  if(email === ""){
    errorMessage.innerHTML = "Please enter your email address"
    errorMessage.classList.add("active")
    return
  }


  if(message === ""){
    errorMessage.innerHTML = "Please enter your message"
    errorMessage.classList.add("active")
  }

  const ContactFormData = {
    name: name,
    email: email,
    message: message
  }

  try {
    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ContactFormData)
    })
    const data = await response.json()
    if(data.error){
      errorMessage.innerHTML = data.message
      errorMessage.classList.add("active")
    } else {
      successMessage.innerHTML = "Message sent successfully!"
      successMessage.classList.add("active")
      ContactFormData.reset()
      setTimeout(() => {
        successMessage.classList.remove("active")
      }, 3000 )
      document.getElementById("contact-form-data").reset()
    }
  } catch (error) {
   errorMessage.innerHTML = "An error occurred while sending the message. Please try again later."
   errorMessage.classList.add("active")
   console.error("Error:", error)
  }

})


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
const RegisterFormData = document.getElementById("Register-Form-Data");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");

RegisterFormData.addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  errorMessage.innerHTML = "";
  errorMessage.classList.remove("active");
  successMessage.innerHTML = "";
  successMessage.classList.remove("active");

  if (firstName === "") {
    errorMessage.innerHTML = "Please enter your first name";
    errorMessage.classList.add("active");
    return;
  }
  if (firstName.length < 5) {
    errorMessage.innerHTML = "Your first name must be at least 5 characters long";
    errorMessage.classList.add("active");
    return;
  }
  
  
  if (lastName === "") {
   errorMessage.innerHTML = "Please enter your last name";
   errorMessage.classList.add("active");
   return;
  }

  if (lastName.length < 5) {
    errorMessage.innerHTML = "Your last name must be at least 5 characters long";
    errorMessage.classList.add("active");
    return;
  }

  if (email === "") {
    errorMessage.innerHTML = "Please enter your email address";
    errorMessage.classList.add("active");
    return;
  }

  if (!email.includes("@")) {
    errorMessage.innerHTML = "Please enter a valid email address";
    errorMessage.classList.add("active");
    return;
  }

  if (phoneNumber === "") {
    errorMessage.innerHTML = "Please enter your phone number";
    errorMessage.classList.add("active");
    return;
  }

  if (!phoneNumber.match(/^\d{10}$/)) {
    errorMessage.innerHTML = "Please enter a valid phone number (10 digits)";
    errorMessage.classList.add("active");
    return;
  }

  if (password === "") {
    errorMessage.innerHTML = "Please enter your password";
    errorMessage.classList.add("active");
    return;
  }

  if (confirmPassword === "") {
    errorMessage.innerHTML = "Please confirm your password";
    errorMessage.classList.add("active");
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.innerHTML = "Passwords do not match";
    errorMessage.classList.add("active");
    return;
  }

  successMessage.innerHTML = "Registration successful!";
  successMessage.classList.add("active");
  RegisterFormData.reset();
  setTimeout(() => {
    successMessage.classList.remove("active");
  }, 3000);

  const RegisterFormData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
  };

  try {
   const response = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(RegisterFormData),
   })

   const data = await response.json()
   if(data.error){
    errorMessage.innerHTML = data.message;
    errorMessage.classList.add("active");
    return;
   } else {
    successMessage.innerHTML = "Registration successful!";
    successMessage.classList.add("active");
    RegisterFormData.reset();
    setTimeout(() => {
      successMessage.classList.remove("active");
    }, 3000);
    window.location.href = "/Login";
   }
  } catch (error) {
   console.error("Error:", error);
    errorMessage.innerHTML = "An error occurred while registering. Please try again later.";
  }
});


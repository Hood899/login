function submitForm(event) {
  event.preventDefault(); // Prevents the form from submitting and reloading the page

  // Get the email input value
  var emailInput = document.getElementById("email");
  var email = emailInput.value;

  // Regular expression pattern for email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  if (emailPattern.test(email)) {
    alert("Your account details are successfully submitted.");
    // Additional code for form submission, such as sending data to a server, can be added here
  } else {
    alert("Invalid email. Please enter a valid email address.");
  }
}
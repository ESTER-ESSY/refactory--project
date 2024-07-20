// fuction for submitting form
function submitForm() {
    // collecting user inputs and storing them in variables
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let role = document.getElementById("roles").value;
    let branch = document.getElementById("branch").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
  
    const validEmailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    // check if all fields are filled
    if (
      !username ||
      !email ||
      !role ||
      !branch ||
      !password ||
      !confirmpassword
    ) {
      alert("Please fill out all the required fields!");
      return;
    } else if (!email.match(validEmailFormat)) {
      // check if email is valid
      alert("Please enter a valid email address!");
      return;
    } else if (password !== confirmpassword) {
      // check if password matches confirm password
      alert("Passwords do not match, please try again!");
      return;
    } else {
      // if all checks pass, display success message
      alert("You have been successfully registered!");
      return;
    }
  }
  
  // get submit button and add event listener
  let submitButton = document.getElementById("submit");
  
  submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // prevent form from submitting normally
  
      submitForm(); // call function to validate and submit form
      
      document.getElementById("form").reset(); // reset form after successful submission
  });
  
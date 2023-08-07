
let signUpPassword = document.getElementById('signUpPassword');
let registerForm = document.getElementById('registerForm');
let emailArry = JSON.parse(localStorage.getItem("emailArry") || "[]"); 
let registerMsg = document.querySelector('#registerMsg')


registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = localStorage.getItem("currentEmail");
  if (email) {

    
    let accountExists = emailArry.some((elem) => elem.emails === email);

    if (accountExists) {
      
      console.log("User already registered with this email.");
      return;
    }

    let emailObj = {
      emails: email,
      password: signUpPassword.value
    };

    emailArry.push(emailObj);
    saveEmails();
    
    
    console.log("User registered successfully.");
    registerMsg.hidden = false
  } else {

    console.error("Error: No email available for registration.");
  }
});

function saveEmails() {
  localStorage.setItem("emailArry", JSON.stringify(emailArry));
}



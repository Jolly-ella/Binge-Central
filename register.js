// let signUpPassword = document.getElementById('signUpPassword');
// let registerForm = document.getElementById('registerForm');
// let emailArry = JSON.parse(localStorage.getItem("emailArry") || "[]"); 
// let registerMsg = document.querySelector('#registerMsg')

// let isAdmin = false;


// registerForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   let email = localStorage.getItem("currentEmail");
//   if (email) {
//     let accountExists = emailArry.some((elem) => elem.emails === email);

//     if (accountExists) {
//       console.log("User already registered with this email.");
//       return;
//     }

//     let password = signUpPassword.value;
    
//     if (email === 'jola@gmail.com' && password === 'jola') {
//       isAdmin = true;
//     }

//     let emailObj = {
//       emails: email,
//       password: password,
//       admin: isAdmin
//     };

//     emailArry.push(emailObj);
//     saveEmails();
//     console.log("User registered successfully.");
//     registerMsg.hidden = false;
//   } else {
//     console.error("Error: No email available for registration.");
//   }
// });

// function saveEmails() {
//   localStorage.setItem("emailArry", JSON.stringify(emailArry));
// }

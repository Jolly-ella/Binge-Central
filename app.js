
// let userSignIn = document.querySelector('#userSignIn')
// let userSignBtn = document.querySelector('#userSignBtn');
// let signUpEmail = document.getElementById('forEmail');
// let startBtn = document.getElementById('startBtn');
// let msg = document.getElementById('msg');
// let emailArry = JSON.parse(localStorage.getItem("emailArry") || "[]"); 


function signIn() {
    infor.style.display = 'none'
    UserSignForm.hidden = false
}



userSignIn.addEventListener('click', signIn)

function redirectToRegisterPage() {
    window.location.href = "register.html";
}

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    redirectToRegisterPage();
})

 function moviePage() {
   window.location.href = "movies.html";
 }


// startBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   let emailValue = signUpEmail.value.trim(); 


//   if (!isValidEmail(emailValue)) {
//     msg.innerHTML = 'Please enter a valid email address.';
//     signUpEmail.style.border = '2px solid red';
//     return; 
//   }

//   let accountExists = emailArry.some((elem) => elem.emails === emailValue);

//   if (accountExists) {
//     msg.innerHTML = 'Account already exists. You are being redirected to the Sign-in Page.';
//     spinner.hidden = false
//     setTimeout(() => {
//       signIn();
//     }, 2000);

//   } else {
  
//     localStorage.setItem("currentEmail", emailValue);
//     redirectToRegisterPage();
//   }
// });

// function isValidEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// function saveEmails() {
//   localStorage.setItem("emailArry", JSON.stringify(emailArry));
// }

 


// userSignBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   let signInEmail = userEmail.value;
//   let signInPassword = userPassword.value;

//   let foundUser = emailArry.find((user) => user.emails === signInEmail);

//   if (foundUser) {
//     if (foundUser.password === signInPassword) {
//       userEmail.style.border = '2px solid green'
//       userPassword.style.border = '2px solid green'
//       signInMsg.innerHTML = ''
//       console.log("User signed in successfully.");
//       moviePage()

//     } else {
//       signInMsg.innerHTML = 'Incorrect Password'
//       userPassword.style.border = '2px solid red'
//       console.log("Incorrect password.");
//     }

//   } else {
//     signInMsg.innerHTML = 'The email you have entered has not been registered please sign up'
//     userEmail.style.border = '2px solid red'
//     console.log("Incorrect username.");
//   }
// });































// // let RegEmail = /^[a-zA-Z0-9.!#$%&'/+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;


// // startBtn.addEventListener('click', (e) => {
// //   const value = inputs.value;
// //   const result = RegEmail.test(value);

// //   if (!result) {

// //     e.preventDefault();
// //     inputs.style.border = '3px red solid';
// //     // msg.innerHTML = 'Invalid Email address';

// //   } else {
// //     inputs.style.border = 'none';

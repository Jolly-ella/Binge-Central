
let userSignIn = document.querySelector('#userSignIn')
let userSignBtn = document.querySelector('#userSignBtn');
let signUpEmail = document.getElementById('forEmail');
let startBtn = document.getElementById('startBtn');
let msg = document.getElementById('msg');
let emailArry = JSON.parse(localStorage.getItem("emailArry") || "[]"); 

function redirectToRegisterPage() {
  window.location.href = "register.html";
}

startBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let emailValue = signUpEmail.value.trim(); 


  if (!isValidEmail(emailValue)) {
    msg.innerHTML = 'Please enter a valid email address.';
    signUpEmail.style.border = '2px solid red';
    return; 
  }

  let accountExists = emailArry.some((elem) => elem.emails === emailValue);

  if (accountExists) {
    msg.innerHTML = 'Account already exists. Please sign in instead.';
  } else {
  
    localStorage.setItem("currentEmail", emailValue);

    redirectToRegisterPage();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function saveEmails() {
  localStorage.setItem("emailArry", JSON.stringify(emailArry));
}



userSignIn.addEventListener('click', (e) => {
  infor.style.display = 'none'
  UserSignForm.hidden = false
})

userSignBtn.addEventListener('click', (e) => {
  e.preventDefault();


})





























// let RegEmail = /^[a-zA-Z0-9.!#$%&'/+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;


// startBtn.addEventListener('click', (e) => {
//   const value = inputs.value;
//   const result = RegEmail.test(value);

//   if (!result) {

//     e.preventDefault();
//     inputs.style.border = '3px red solid';
//     // msg.innerHTML = 'Invalid Email address';

//   } else {
//     inputs.style.border = 'none';

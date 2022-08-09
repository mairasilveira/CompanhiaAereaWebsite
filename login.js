var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus',()=>{
    email.style.borderColor = "#d73851";
})

email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc";
})

password.addEventListener('focus',()=>{
    password.style.borderColor = "#d73851";
})

password.addEventListener('blur',()=>{
    password.style.borderColor = "#ccc";
})
var registerForm = document.getElementById("registerForm");

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
         fullname,
    username,
    email,
    contact,
    password,
    confirmPassword  
} = getRegisterFromData();
console.log(fullname, password);

if(password != confirmPassword){
    let messageContainer = document.getElementById("message");
    messageContainer.textContent = "Password do not match";
    return;

}
const user = {fullname, username,email,contact,password}
console.log(user);
localStorage.setItem("user", JSON.stringify(user));

loadSignInPage();
 
})

function loadSignInPage(){
    window.location.href = './sign-in.html';
}


function getRegisterFromData(){
const fullname = document.getElementById("fullname").value;
const username = document.getElementById("username").value;
const email  = document.getElementById("email").value;
const contact = document.getElementById("contact").value;
const password = document.getElementById("password").value;
const confirmPassword   = document.getElementById("confirm-password").value;


return{
    fullname,
    username,
    email,
    contact,
    password,
    confirmPassword  
}
 

}  
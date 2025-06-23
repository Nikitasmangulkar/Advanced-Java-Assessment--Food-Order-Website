var signInButton = document.getElementById("signInButton");

function clearMessage() {
    const message = document.getElementById('message')
    message.innerText = "";
}
userName.addEventListener("keyup", clearMessage);
password.addEventListener("keyup", clearMessage);

signInButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    const { username, password, messageElement } = fetchSignInPageData()
    try {
        const registeredUser = JSON.parse(localStorage.getItem("user"));
        console.log(registeredUser);
        if (username === "" || password === "") {
            messageElement.textContent =
                "Username and Password fields cannot be empty!!";
        } else {
            if (
                username === registeredUser.username &&
                password === registeredUser.password
            ) {
                sessionStorage.setItem("login", true);
                window.location.replace("./html/index.html");
            } else {
                 messageElement.textContent = "Incorrect Username or Password!!";
                sessionStorage.setItem("login", false);
            }
        }
    } catch (err) {
        messageElement.textContent =
            "The user is not registered yet. Please click on the register button to register yourself!!";
    }
})
function fetchSignInPageData() {
    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    return { username, password, messageElement };
}
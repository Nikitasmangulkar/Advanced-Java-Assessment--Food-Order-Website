// Observer the body tag of all html files. use validateLogIn function to verfy the login activity
function validateLogIn() {
    const userLogin =  JSON.parse(sessionStorage.getItem("login"));

    // Check whether the login status is true
    if (userLogin === true) {
        console.log("login is successfull !!!!")
    }
    else {
        // If login status is false, redirect to signin.html page
        alert("You must login first to access this page.")
        window.location.href = '../sign-in.html';
    }
}

var welcome = document.getElementById('userName');
//console.log(welcome);
welcome.textContent = 'Welcome '; 
welcome.textContent += JSON.parse(localStorage.getItem("user")).username + '!';

var signOut = document.getElementById('signout')
signOut.addEventListener('click', () => {
    sessionStorage.setItem("login", false);
    window.location.href = "../sign-in.html";
})
      
// Add event listener to every sign out button in the header as asked in the problem statement.
let list_Users = [];

async function loadAllUsers() {
    list_Users = await fetch("http://localhost:3000/users")
        .then(response => response.json())
        .catch(error => console.log(error.message))


    for (var i = 0; i < list_Users.length; i++) {
        var user = list_Users[i];
        addUser(user, i + 1);
    }
}

// Function to add one product to the table
function addUser(newUser, Number) {
    var usersTable = document.getElementById("usersTable")
    var body = document.querySelector("tbody")

    row = document.createElement("tr")

    row.innerHTML += `
    <td>${newUser.id}</td>
    <td>${newUser.name}</td>
    <td>${newUser.email}</td>
    <td>${newUser.contact}</td>
    `
    body.appendChild(row)
    usersTable.appendChild(body)
    console.log("User added successfully")
}

async function initialize() {
    await loadAllUsers();
}

initialize()



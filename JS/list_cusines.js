let list_Cuisine= [];

async function loadAllCuisine() {
    list_Cuisine = await fetch("http://localhost:3000/cuisines")
        .then(response => response.json())
        .catch(error => console.log(error.message))
        console.log(list_Cuisine);

    for (var i = 0; i < list_Cuisine.length; i++) {
        var foodItem = list_Cuisine[i]
        addCuisine(foodItem, i + 1)
    }
}

// Function to add one product to the table
function addCuisine(newCuisine, Number) {
    var cusineTable = document.getElementById("cusineTable")
    var body = document.querySelector("tbody")

    row = document.createElement("tr")

    row.innerHTML += `
    <td>${Number}</td>
    <td>${newCuisine.name}</td>
    <td>${newCuisine.description}</td>
    <td>${newCuisine.active}</td>

    `
    row.innerHTML += newCuisine.image != "" ? `<td><img src="${newCuisine.image} "alt="FoodItem Image" width="50" height="50"></td>`
        : `<td><img src="" /></td>`;
    row.innerHTML += `<td><button class="btn edit-btn table-btn">Edit</button></td>`

    body.appendChild(row)
    cusineTable.appendChild(body)
    console.log("Cuisine added successfully")
}


async function initialize() {
    await loadAllCuisine();
}

initialize()
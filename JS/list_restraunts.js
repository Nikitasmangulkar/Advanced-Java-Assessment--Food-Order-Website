let list_restaurants = [];

async function loadAllRestaurants() {
    list_restaurants = await fetch("http://localhost:3000/restaurants")
        .then(response => response.json())
        .catch(error => console.log(error.message))


    for (var i = 0; i < list_restaurants.length; i++) {
        var restaurant = list_restaurants[i];
        addRestaurant(restaurant, i + 1);
    }
}

// Function to add one product to the table
function addRestaurant(newRestaurant, Number) {
    var restaurantsTable = document.getElementById("restaurantsTable")
    var body = document.querySelector("tbody")

    row = document.createElement("tr")

    row.innerHTML += `
    <td>${Number}</td>
    <td>${newRestaurant.name}</td>
    `
    row.innerHTML += newRestaurant.image != "" ? `<td><img src="${newRestaurant.image}" alt="Restaurant Image" width="50" height="50"></td>`
        : `<td><img src="" /></td>`;
   row.innerHTML += `<td>${newRestaurant.address}</td>
    <td>${newRestaurant.contact}</td>
    <td><button class="btn edit-btn table-btn">Edit</button></td>`

    body.appendChild(row)
    restaurantsTable.appendChild(body)
    console.log("Restaurant added successfully")
}

async function initialize() {
    await loadAllRestaurants();
}

initialize()
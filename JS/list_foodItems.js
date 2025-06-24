let list_FoodItems = [];

async function loadAllFoodItems() {
    list_FoodItems = await fetch("http://localhost:3000/foodItems")
        .then(response => response.json())
        .catch(error => console.log(error.message))
    console.log(list_FoodItems);
    for (var i = 0; i < list_FoodItems.length; i++) {
        var foodItem = list_FoodItems[i]
        addfoodItem(foodItem, i + 1)
    }
}

// Function to add one product to the table
function addfoodItem(newFoodItem, Number) {
    var foodItemsTable = document.getElementById("foodItemsTable")
    var body = document.querySelector("tbody");
    console.log("Inside List Food item Function");

    row = document.createElement("tr")

    row.innerHTML += `
    <td>${Number}</td>
    <td>${newFoodItem.name}</td>
    <td>${newFoodItem.description}</td>
    <td>${newFoodItem.inStock}</td>
    <td>${newFoodItem.isVeg}</td>
    <td>${newFoodItem.category}</td>
    <td>${newFoodItem.cuisine}</td>
    `
    row.innerHTML += newFoodItem.image != "" ? `<td><img src="${newFoodItem.foodImage} "alt="FoodItem Image" width="50" height="50"></td>`
        : `<td><img src="" /></td>`;
    row.innerHTML += `<td><button class="btn edit-btn table-btn">Edit</button></td>`

    body.appendChild(row)
    foodItemsTable.appendChild(body)
}


async function initialize() {
    await loadAllFoodItems();
}

initialize()
let list_Categories = [];

async function loadAllCategories() {
    list_Categories = await fetch("http://localhost:3000/categories")
        .then(response => response.json())
        .catch(error => console.log(error.message))
    console.log(list_Categories);
       

    for (var i = 0; i < list_Categories.length; i++) {
        var category = list_Categories[i];
        addCategory(category, i + 1);
    }
}

// Function to add one product to the table
function addCategory(newCategory, Number) {
    var categoriesTable = document.getElementById("categoryTable")
    var body = document.querySelector("tbody")

    row = document.createElement("tr")

    row.innerHTML += `
    <td>${Number}</td>
    <td>${newCategory.name}</td>
    <td>${newCategory.description}</td>
    <td>${newCategory.active}</td>
    `
    row.innerHTML += newCategory.image != "" ? `<td><img src="${newCategory.image}" alt="Category Image" width="50" height="50"></td>`
        : `<td><img src="" /></td>`;
    row.innerHTML += `<td><button class="btn edit-btn table-btn">Edit</button></td>`

    body.appendChild(row)
    categoriesTable.appendChild(body)
    console.log("Category added successfully")
}

async function initialize() {
    await loadAllCategories();
}

initialize()
    
var form = document.getElementById("foodItemForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission
        console.log("Form submitted Save");
        // Get the values from the input fields
        var fname = document.getElementById("fname").value;
        var desc = document.getElementById("desc").value;
        var instock = document.getElementById("instock").checked ? "Yes" : "No";
        var isVeg = document.getElementById("isVeg").checked ? "Yes" : "No";
        var category = document.getElementById("category").value;
        var cuisine = document.getElementById("cuisine").value;
        var foodimg = document.getElementById("foodimg").value;

        if (fname === "") {
            alert("Please select a valid category option.");
            return;
        }

        // Create a new food item object
        var newFoodItem = {
            name: fname,
            description : desc,
            inStock: instock,
            isVeg: isVeg,
            category: category,
            cuisine: cuisine,
            foodImage: foodimg,
        };

        
        try {
            // Add newFoodItem to JSON file
            const response = await fetch("http://localhost:3000/foodItems", 
                {
                    method: 'POST',
                    body: JSON.stringify(newFoodItem) // Convert the food item object to a JSON string
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json(); // Handle response
            //console.log(result.message);


            // Get the form element and reset it
            form.reset();

            window.location.href = "../html/list_fooditems.html";
        }
        catch (error) {
            console.error("Error adding food item:", error.message);
            alert("Failed to add food item. Please try again.");
        }
    });
}
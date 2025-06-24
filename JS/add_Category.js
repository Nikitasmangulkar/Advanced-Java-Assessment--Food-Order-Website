var form = document.getElementById("categoryForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the input fields
        var category = document.getElementById("category").value;
        var desc = document.getElementById("desc").value;
        var Active = document.getElementById("Active").checked ? "Yes" : "No";
        var image = document.getElementById("categoryimg").value;

        if (category === "") {
            alert("Please select a valid category option.");
            return;
        }

        // Create a new category object
        var newCategory = {
            name: category,
            description : desc,
            active: Active,
            image: image,
        };

        
        try {
        // Add newFoodItem to JSON file
        const response = await fetch("http://localhost:3000/categories", 
            {
                method: 'POST',
                body: JSON.stringify(newCategory) // Convert the food item object to a JSON string
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Handle response
        console.log(result.message);


        // Get the form element and reset it
        form.reset();

        window.location.href = "./list_categories.html";
    }
    catch (error) {
        console.error("Error adding category:", error.message);
        alert("Failed to add category. Please try again.");
    }
    });
}
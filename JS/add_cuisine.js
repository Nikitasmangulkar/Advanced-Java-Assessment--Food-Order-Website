var form = document.getElementById("cuisineForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the input fields
        var cuisine = document.getElementById("cuisine").value;
        var desc = document.getElementById("desc").value;
        var cuisineimg = document.getElementById("cuisineimg").value;
        var Active = document.getElementById("Active").checked ? "Yes" : "No";

        if (cuisine === "") {
            alert("Please select a valid cuisine option.");
            return;
        }

        // Create a new category object
        var newCuisine = {
            name: cuisine,
            description : desc,
            image: cuisineimg,
            active: Active,
        };

        try {
        // Add newFoodItem to JSON file
        const response = await fetch("http://localhost:3000/cuisines", 
            {
                method: 'POST',
                body: JSON.stringify(newCuisine) // Convert the food item object to a JSON string
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

        window.location.href = "./list_cuisines.html";
    }
    catch (error) {
        console.error("Error adding cuisine:", error.message);
        alert("Failed to add cuisine. Please try again.");
    }
    });
}
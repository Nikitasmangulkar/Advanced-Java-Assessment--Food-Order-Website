var form = document.getElementById("restrauntForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the input fields
        var restaurant = document.getElementById("restaurant").value;
        var addr = document.getElementById("addr").value;
        var contact = document.getElementById("contact").value;
        var image= document.getElementById("pic").value;

        if (restaurant === "") {
            alert("Please select a valid restaurant option.");
            return;
        }

        // Create a new category object
        var newRestaurant = {
            name: restaurant,
            address: addr,
            contact: contact,
            image: image,
        };

        try {
        // Add newFoodItem to JSON file
        const response = await fetch("http://localhost:3000/restaurants", 
            {
                method: 'POST',
                body: JSON.stringify(newRestaurant) // Convert the food item object to a JSON string
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

        window.location.href = "./list_restaurants.html";
    }
    catch (error) {
        console.error("Error adding restaurant:", error.message);
        alert("Failed to add restaurant. Please try again.");
    }
    });
}
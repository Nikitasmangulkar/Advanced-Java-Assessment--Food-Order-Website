let list_orders;

async function loadAllOrders() {
    list_orders = await fetch("http://localhost:3000/orders")
        .then(response => response.json())
        .catch(error => console.log(error.message))

    for (var i = 0; i < list_orders.length; i++) {
        var order = list_orders[i]
        addOrder(order, i + 1)
    }
}

function addOrder(newOrder, Number) {
    var categoriesTable = document.getElementById("OrdersTable");
    var body = document.querySelector("tbody");

    row = document.createElement("tr");

    row.innerHTML += `
    <td>${Number}</td>
    <td>${newOrder.id}</td>
    <td>${newOrder.date}</td>
    <td>${newOrder.status}</td>
    <td>${newOrder.amount}</td>
     <td>${newOrder.userId}</td>
    <td><a href="order_detail.html"><button class="table-btn">View Details</button></a></td>
    `

    body.appendChild(row)
    categoriesTable.appendChild(body)
    console.log("Orders added successfully")
}

async function initialize() {
    await loadAllOrders();
}

initialize()
Open data.json file and go through the objects. Every Object in the array must have an id. 
If no id key is added to the objects, server will assign id for every array object. Do not worry about the id in the json files.

----------------------------------
Steps to launch json server
----------------------------------

1. Install JSON Server globally
``````````````````````````````````````
In your terminal or command prompt, run:

______________________________
npm install -g json-server
______________________________


This makes json-server available from anywhere on your system.


2. Naviagte the terminal path to JSON folder.
``````````````````````````````````````````````
Execute the below command to start JSON server.
______________________________
json-server --watch data.json
______________________________

You will see links to objects in the JSON file as below.
Copy any of the links below and paste it in the url of a web page.
Now the server is up and running just like any other link on the Web (Internet).
The server is launched in default port 3000.

Output in terminal
---------------------------------
http://localhost:3000/categories
http://localhost:3000/foodItems
http://localhost:3000/cuisines
http://localhost:3000/restaurants
http://localhost:3000/orders
http://localhost:3000/users

To launch server in different port you can execute the command below.
_________________________________________
json-server --watch data.json --port 3001
_________________________________________


3. Stop the Server
`````````````````````````````````````````
Place the cursor in the terminal and press Ctrl + C to stop the server.

Repeat from Step 2 to launch json-server at anytime.
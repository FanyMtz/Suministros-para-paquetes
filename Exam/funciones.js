
const express = require("express");
const bodyParser = require("body-parser");
  
const app = express();
  
app.use(express.json());
  
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
  
app.post("/userdata", function (req, res) {
    res.send(
        `Hello ${req.body.sku}, your email is ${req.body.name}`
    );
});
  
app.listen(3000, function () {
    console.log("Server started on port 3000");
});

function sendJsondata(){
    sku = document.getElementById("sku").value;
    name = document.getElementById("name").value;
    quantity = document.getElementById("quantity").value;
    price = document.getElementById("price").value;

// Creating a XHR object
var xhr = new XMLHttpRequest();

// open a connection
xhr.open("POST", "/options");
    
 // Set the request header
 xhr.setRequestHeader(
    "Content-Type", "application/json"
  );

  // Converting JSON data to string
  var data = JSON.stringify(
    { sku: sku, name: name, quantity : quantity, price : price }
  );
  xhr.send(data);

  // Create a state change callback
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 &&
          xhr.status === 200) {
          // Print received data from server
          result.innerHTML = this.responseText;
      }
  };
}

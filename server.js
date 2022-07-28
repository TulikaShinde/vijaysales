const { response } = require("express");
var express = require("express");
var app = express();

app.get("/", (req, res) => 
{
    res.send(
        "<h1>Vijay Sales</h1>"
        +"<hr/>"
        +"<h3>All kinds of Electronic appliances </h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobile Phones</li>"
        +"<li>Holographic Devices</li>"
        +"<li>Smart Watches</li>"
        +"<li>Gaming Consoles</li>"
        +"</ol>"
    );
});

app.get("/aboutus", (req, res) => 
{
    res.send(
        "<h1>Vijay Sales</h1>"
        +"<hr/>"
        +"<h3>Sale Items</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptops 30% off</li>"
        +"<li>Mobile Phones 20% off</li>"
        +"</ol>"
    );
});

app.get("/login", (req, res) => 
{
    res.send(
        "<h1>Vijay Sales</h1>"
        +"<h3>Login</h3>"
        +"<hr/>"
        +"<form>"
        +"<br/>"
        +"<input/>"
        +"<button>Login</button>"
        +"</form>"
    );
});

var server=app.listen(9000);
console.log("Vijay Sales online app listening at port 9000");
const express = require('express');
const app = express();
app.get("/", function(request, response) {
    response.send("Hi How are you !");
});

app.get("/about", function(req, res) {
    res.send("<h1>Hi, I am ShriVishnu.</h1><br><h4>a Web Developer.</h4>");
});
app.get("/contact", function(req, res) {
    res.send("Contact me at abc@gmail.com");
});
app.listen(3000, function() {
    console.log("Server Running");
});


//setting up a server using express
const express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res) =>{
// res.send("<h1>hi from the server</h1>");
    res.sendFile(__dirname +'/index.html');
    console.log("Server request working")
})

app.listen(PORT, (err) => {
    if(err) {
        console.log("Server Error", err);
        process.exit(1);
    }
    console.log("Server is up listening to port"+PORT);
});

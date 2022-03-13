const listenPort = 3333;
const e = require("express");
let express = require("express");
let path = require('path');
const { resourceLimits } = require("worker_threads");
let app = express();
app.set("view engine","ejs");
app.use(express.static('images'));
app.use(express.urlencoded({extended:true}));
//Don't let me forget this part again please
app.use("/css",express.static(__dirname + "/css"));

app.listen(listenPort, function() {console.log("Listener active on port " +
listenPort); });

//Main pages
app.get("/", function(req, res) {
    res.render("home")
});

app.get("/about", function(req, res) {
    res.render("about")
});

app.get("/resume", function(req, res) {
    res.render("resume")    
});

app.get("/projectsList", function(req, res) {
    res.render("projectsList")    
});

//The cool projects
app.get("/giftAssigner", function(req, res) {
    res.render("giftAssigner")    
});
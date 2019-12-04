var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:puppy", function(req, res){  
    var puppy = req.params.puppy;
    res.render("love", {thingVar:puppy});
});

app.get("/posts", function(req, res){
   var posts = [
       {title: "Post 1", author: "charlie"},
       {title: "Something else", author: "mark"},
       {title: "Third post", author: "karl"}
   ];

   res.render("posts", {posts: posts});
});


app.listen(3000, function () {
    console.log('Server listening on port 3000'); 
}); 
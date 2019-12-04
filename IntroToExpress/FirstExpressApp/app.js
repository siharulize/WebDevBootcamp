var express = require("express");
var app = express();

// "/" => "Hi There!"   
app.get("/", function(req,res){
res.send("Hi THERE!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req,res){
    res.send("Goodbye!");
    });
// "/dog" => "Meow!"
app.get("/dog", function(req,res){
    res.send("Meow!");
    });

app.get("/r/:subredditName", function(req,res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase()  + " SUBREDDIT!");
    });

app.get("/r/:subredditName/comments/:id/:title", function(req,res){
    res.send("Welcome to comments page!");
    });


app.get("*", function(req,res){
    res.send("you are a star!!!");
});


app.listen(3000, function () {
    console.log('Server listening on port 3000'); 
}); 
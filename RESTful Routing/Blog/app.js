var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

//APP CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

//MONGOOSE MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

/* Blog.create({
    title: "hamsters",
    image: "https://images.unsplash.com/photo-1526346093155-a601c2cbe917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    body: "two brown and beige hamsters"
}); */

//RESTFUL ROUTES
//INDEX ROUTE
app.get("/", function(req, res){
    res.redirect("/blogs");
});

//NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req, res){
    //create blog
    Blog.create(req.body.blog, function(err, newBlog){
        if (err){
           res.render("new");
        } else {
            res.redirect("/blogs")
        }
    });
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if (err){
            console.log("ERROR");
        } else {
            res.render("index", {blogs: blogs});
        }
    }); 

});

app.listen(3000, function(){
    console.log("Server is Running!");
});
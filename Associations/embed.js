var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//POSt - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - email,name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

/* var newUser = new User({
     email: "hermionee@hogwarts.com",
     name: "hermione granger"
});

newUser.posts.push({
    title: "Polyjuice potion",
    content: "just kidding"
});

newUser.save(function(err, user){
    if (err){
        console.log(err);
    } else {
        console.log(user);
    }
}); */

/* var newPost = new Post({
    title: "Reflections on apples",
    content: "They are delicious"
});

newPost.save(function(err, post){
    if (err){
        console.log(err);
    } else { 
        console.log(post);
    }
}); */

User.findOne({name: "hermione granger"}, function(err, user){
    if (err){
        console.log(err);
    } else {
        user.posts.push({
            title: "3 things i hate",
            content: "voldemort, voldemort, voldemort"
        });
        user.save(function(err, user){
            if (err){
                console.log(err);
            }else {
                console.log(user);
            }
        });
    }
});
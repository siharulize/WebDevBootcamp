var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo_2", 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

var Post = require("./models/post");

var User = require("./models/user");

/* User.create({
    email: "bob@gmail.com",
    name: "Bob Belcher"
}); */

Post.create({
    title: "How to cook dffchzcake pt3",
    content: "caaaaheck dffd ddfdgfdg"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if (err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, date){
                if (err){
                    console.log(err);
                } else {
                    console.log(date);
                }
                
            });
        }
    });
});
 

//find user
//find all posts for user

/* User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else{
        console.log(user);
    }
}); */
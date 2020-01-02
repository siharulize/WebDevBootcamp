var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "Painter's Way", 
        image: "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "The term camp comes from the Latin word campus, meaning field. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged"
    },
    {
        name: "Wine on the Rhine", 
        image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "The term camp comes from the Latin word campus, meaning field. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged"
    },
    {
        name: "Lilac bloom", 
        image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "The term camp comes from the Latin word campus, meaning field. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged"
    },
    {
        name: "Goethe's path", 
        image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "The term camp comes from the Latin word campus, meaning field. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged"
    }

]
 
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
/*              //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            }); */
        }); 
    }); 
    //add a few comments
}
 
module.exports = seedDB;
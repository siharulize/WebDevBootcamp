#YelpCamp

====================================================

INDEX     /campgrounds        GET     Display a list of all campgrounds
NEW       /campgrounds/new    GET     Displays form to make a new campground
CREATE    /campgrounds        POST    Add new campground to DB
SHOW      /campgrounds/:id    GET     Shows info about one campground

NEW       /campgrounds/:id/comments/new    GET
CREATE    /campgrounds/:id/comments        POST


====================================================


#Initial Setup
    - Add Landing Page
    - Add Campground Page that lists all campgrounds
        Each campground has:    
            - name
            - image

#Layout and Basic Styling
    - Create our header and footer partials
    - Add in Bootstrap

#Creating New Campgrounds
    - setup POST route
    - Add body parser
    - setup route to show form
    - Add basic unstyled form 

#Style the campgrounds page
    - Add a better header/title
    - Make campgrounds display in a grid

#Style the Navbar and Form
    - add a navbar to all templates
    - style the new campground form

#Add Mongoose
    - Install and configure mongoose
    - Setup campground model
    - Use campground model inside of our routes!

#Show Page
    - Review the RESTful routes
    - Add description to campground model
    - Show db.collection.drop()
    - Add a show route/template  

#Refactor Mongoose Code
    - Create a models directory
    - Use module.exports
    - Require everything correctly

#Add Seeds File
    - Add a seeds.js file
    - Run the seeds file every time the server starts

#Add the comment model
    - display comments on campground show page

#Comment New/Create
    - nested routes
    - add new omment new and create routes
    - add the new comment form

#Style show page
    - Add sidebar to show page
    - Dispay comments nicely
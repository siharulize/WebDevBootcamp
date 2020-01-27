#YelpCamp

====================================================

INDEX     /campgrounds              GET     Display a list of all campgrounds
NEW       /campgrounds/new          GET     Displays form to make a new campground
CREATE    /campgrounds              POST    Add new campground to DB
SHOW      /campgrounds/:id          GET     displays one campground based on ID in the url
EDIT      /campgrounds/:id/edit     GET     displays edit form based on ID in the url
UPDATE    /campgrounds/:id          PUT     replaces an existing article based on ID in the url
DELETE    /campgrounds/:id          DELETE  deletes campground from DB

NEW       /campgrounds/:id/comments/new                 GET
CREATE    /campgrounds/:id/comments                     POST
EDIT      /campgrounds/:id/comments/:comment_id/edit    EDIT
UPDATE    /campgrounds/:id/comments/:comment_id         PUT
DELETE    /campgrounds/:id/comments/:comment_id         DELETE 


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
    - Add public Directory
    - Add custom stylesheet

#Authentication 
    - Install all packages needed for auth
    - Define User model
    - Configure passport
    - Add register routes
    - Add register template
    - Add login routes
    - add login template
    - add logout route

#Navbar
    - prevent user from adding a comment if not signed in
    - add links to navbar
    - show/hide auth links in navbar correctly

#Refactoring
    - refactoring routes
    - use express router to reorganize all routes
    - associate users + comments
    - save author's name to a comment automatically
    - Prevent an unauthenticated user from creating a campground
    - save username+id to newly created campground

#Editing Campgrounds
    - Add method-override
    - add edit route for camogrounds
    - add link to edit page
    - add update route
    - fix $set problem

#Authorization campgrounds
    - User can only edit his/her campgrounds
    - User can only delete his/her campgrounds
    - Hide/Show Edit and Delete buttons
    - Add destroy route
    - add delete button 

#Authorization Comments
    - add edit route for comments
    - add edit button
    - add update route
    - add destroy route
    - add delete button
    - User can only edit his/her comments
    - User can only delete his/her comments
    - Hide/Show Edit and Delete buttons
    - refactor middleware

#Adding in Flash!
    - demo working version
    - Install and configure connect- flash
    - add bootstrap alerts to header

#adding background slider
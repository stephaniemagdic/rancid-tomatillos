# Movie Buffer

## Table Of Contents
+ [Overview](#overview)
+ [Examples](#examples)
+ [Setup instructions](#setup-instructions)
+ [Learning Goals](#learning-goals)
+ [Future features](#future-features)
+ [Technologies used](#technologies-used)
+ [Contributors](#contributors)
+ [Reflections & Wins](#reflections-and-wins)

## Overview
+  This project was an exercise in building an app from scratch utilizing the React framework to display movie data from multiple APIs. This app allows users to view a selection of movies from an API, as well as click on any of the movie cards to view that movie's details. Users are also able to add any movie from the API into their favorites, which is posted to an Express server backend. 

## Examples


<img src="https://i.ibb.co/b66r2RN/RT-Add-to-Favorites.gif" alt="RT-Add-to-Favorites" border="0" width="750px" height="550px">
<img src="https://i.ibb.co/zmKfyMC/RT-back-button.gif" alt="RT-back-button" border="0" width="750px" height="550px">
<img src="https://i.ibb.co/j60W0DB/RT-remove-from-favorites.gif" alt="RT-remove-from-favorites" border="0" width="750px" height="550px">
<img src="https://i.ibb.co/C52GXdp/RT-Router.gif" alt="RT-Router" border="0" width="750px" height="550px">

## Setup Instructions
  + Fork this repo by clicking the ```Fork``` button in the upper right of this page
  + Clone your new repo down to your local machine in your chosen directory
  + This application requires you run a local server in order to handle the favorite movies functionality of the app. You can do this by forking down [this repo](https://github.com/MTCawthray/rancid-tomatillos-api) and following the instructions on the ```README```
  + After your local server is up and running, in your terminal you can navigate back to this repo that you have forked
  + Type ```npm install``` into the command line to install all dependencies
  + Type ```npm start``` into to the command line to start the React app. A browser window will appear running a local host url
  
### Using The App
  + When a user first sees the app load, they will be greeted with a dashboard of movie cards that display the movie poster and rating. 
  + A user can click on any of the cards which will bring them to a new page of the application that displays that movies specific details.
  + Inside of this details view, a user has the option to click an _add to favorites_ button that will send that movie to the express API and save it for viewing on the favorites page.
  + To view a list of favorited movies, a user can click on the Favorites link in the header (available on any page view) and will be brought to a new page that displays the movie cards of all favorited movies. If no movies are added to favorites yet, the page will display a prompt telling them to return to the home page and pick out a favorite.
  + A user can also chose to go back to the homepage in one of three ways- clicking the home link in the header, clicking the _rewind icon_ in the top right corner of the movie's image, or by simply clicking on Movie Buffer in the header.

## Learning goals
  + Gain competency with React fundamentals
  + Learn how to build an Express.js backend server
  + Learn how to test React components & asynchronous JS
  + Practice refactoring
  + Create a multi-page UX using Router
  
## Future features
  + Sort and filter methods that a user can access from the header, such as a display by rating, search-bar, filter by genre.
  + Adding a button on the movie cards that allow a user to add/delete from favorites without entering into the movie details view.
  + A video selection component inside of the movie detail view.

## Technologies used
  + React
  + Express.js
  + Express Router
  + javaScript
  + HTML
  + CSS
  + Cypress
  + Mocha
  + Chai
  

## Contributors
  + [Stephanie Magdic (Author)](https://github.com/stephaniemagdic)
  + [Mark Cawthray (Author)](https://github.com/MTCawthray)
  

## Reflections And Wins
  + Building an app from scratch with React and React Router was quite a fun learning experience. We felt confident in how our application stores and handles data and were pleased with the design of how that data renders to the DOM. 
  + We decided to set a stretch goal of utilizing the Express.js framework that allowed us to create a small backend server to hold a user's favorite movies. We successfully implemented this feature and it allowed us to get practice creating GET, POST, and DELETE requests that we otherwise wouldn't have been able to work with had we just used the original API.
  + Working as a team allowed us to successfully navigate through issues that popped up throughout our collective learning experience on this project. It also enabled us to work asynchronously towards our stated goals that ultimately let us cover more ground than we initially anticipated. 
  + We utilized Cypress testing for the first time on this project. It was a very interesting switch from our previous experience of only unit testing. Switching our mindset to getting inside the head of a potential user was a challenge, but ultimately a valuable learning experience and it put user empathy on the front of our minds as we were building out the features of this app. 
  + In learning so many new frameworks and libraries at once, we had to get more and more comfortable navigation through each one's documentation. This helped immensely in troubleshooting any problems that arose along the way.

  [Return to top](#rancid-tomatillos)




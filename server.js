/* Notice how this is called server.js
This is what we usually call BACKEND js files */

/* EXPRESS BOILERPLATE */

// This is required for all apps using express

const express = require('express') // Create express variable to pull the express library
const PORT = process.env.PORT || 3002 // Tells express which port to run on
/* The former keeps the used port secret. Uses secret port OR port 3002 */
const app = express() // Define the app variable
/* Now, similar to event listeners, link the port to the app. Whenever port is called, get the response*/
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

/* ROUTES */

// Webpages have slashes in them to denote specific sub pages. This is how you set them up

// This is the empty slash, meaning it's the landing page (Like https://mywebsite.com/)

app.get('/', (req, res)=> { // request and response arguements
    res.send('Hello there! Welcome to my website!')
})

/* You will see this string when you visit the landing page (In this case, http://localhost:3002/) */

/* Defining https://mywebsite.com/favorite-dessert */

app.get('/favorite-dessert', (req, res)=> {
    // The request is a JSON object! (Without a name for some reason)
    res.send({ 
        cookies: 'chocolate chip',
        brownies: 'extra fudgy',
        shortcake: 'Strawberry'
    })
})

/* You will see this string when you visit the desserts (In this case, http://localhost:3002/favorite-dessert) */

app.get('/today', (req, res)=> {
    // The request is a JSON object! (Without a name for some reason)
    res.send({ 
        monday: true,
        tuesday: false,
        wednesday: false
    })
})

/* YOU DO: Let's define the following!

 - GET /                  Response content: "Welcome to my webpage"
 - GET /favorite-food     Response content: Your favorite food
 - GET /favorite-movie    Response content: Your favorite movie
 - GET /contact           Response content: Your preferred contact info
 - GET /about-me          Response content: A JSON object with properties about yourself
 - GET /movies            Response content: A JSON object that contains an array of 3 objects, each one containing a movie's name, release date, and durationInMinutes
*/

app.get('/favorite-food', (req, res)=> {
    res.send('My favorite food is cheese fries! But more recently its rice and chicken')
})

app.get('/favorite-movie', (req, res)=> {
    res.send('My favorite movie is probably Heat (1995)')
})

app.get('/contact', (req, res)=> {
    res.send('I prefer to be contacted by pigeon')
})

app.get('/about-me', (req, res)=> {
    res.send({
        name: 'John Doe',
        age: '23',
        favoriteColor: 'blue'
    })
})

app.get('/movies', (req, res) => {
    res.send(
        {
        movies: [ /* For some reason you must use a colon instead of an = here */
            {
            movieName: 'Scarface',
            movieReleaseDate: '1984',
            movieDuration: 'Three hours'},
            {
            movieName: 'Heat',
            movieReleaseDate: '1995',
            movieDuration: 'Two Hours'},
            {
            movieName: 'Killers of the Flower Moon',
            movieReleaseDate: '2023',
            movieDuration: 'Three Hours'}
            ]
        }
    )
})


/* Dymanic endpoints */

// Can pass in dynamic values using req.params,
// Putting a colon (:) before the special parameter allows this

app.get('/message/:id', (req, res)=> {
    console.log(`message id of ${req.params.id}`)
    res.send({
        msg: `id of ${req.params.id}`,
    })
})

/* Query */

// Queries allow us to have user search and interactivity

app.get('/find', (req, res)=> {
    res.send({
        msg: `${req.query.name} is ${req.query.age} years old`,
    })
})

/* You will get this when you access localhost:3002/find?name=Bob&age=23 */
/* REPEATABLE RESPONSES! */


/* This will catch all paths not defined, done using special character (*) */

/* Should ALWAYS be at bottom of the code
Because anything below this is never read, due to way cascading works with express */

app.get('/*', (req, res)=> {
    res.send({
       error: '404 file not found'
    })
})
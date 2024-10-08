/* EXPRESS MIDDLEWARE */

const express = require('express')
const cors = require('cors') // Must require cors
/* cors makes sure your data is being read and parsed through the right ports, no entanglement */
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())

// the following middleware comes out of the box with express...
// Makes sure stuff is sent and done the way we want
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Your Code Here

// Your Code Ends Here
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})

// next is a function that tells express to call or invoke the next function.

app.get('/', (req, res)=> { // request and response arguements
    res.send('Hello there! Welcome to my middleware website!')
})


app.get('/middleware', (req, res, next) => {
    console.log('middleware is working')
    next()
},
    (req, res) => 
        {res.send('response complete')}
)

app.get('/*', (req, res)=> {
    res.send({
       error: '404 file not found'
    })
})
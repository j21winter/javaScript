const express = require('express'); // import express
const app = express(); // Save express to a const variable

const cors  = require('cors');
const port = 8000;


app.use(cors());
app.use(express.json()) // Allows JSON Objects to be posted
app.use(express.urlencoded({ extended: true })) // Allows JSON Objects with strings and arrays*/


require('./config/mongoose.config') // Sever importing mongoose and db connection

//TODO Any Route files you need go here...
require('./routes/product.routes')(app)


app.listen(port, () => console.log(`Listening on port: ${port}`) );
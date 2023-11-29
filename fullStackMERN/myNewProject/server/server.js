const express = require('express');
const cors  = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json()) // Allows JSON Objects to be posted
app.use(express.urlencoded({ extended: true })) // Allows JSON Objects with strings and arrays*/

require('./config/mongoose.config')
// Any Route files you need go here...
require('./routes/person.routes')(app); 

app.listen(port, () => console.log(`Listening on port: ${port}`) );
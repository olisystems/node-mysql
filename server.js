const express = require('express')
const bodyParser = require('body-parser')
const routes = require("./routes/routes.js")
const app = express()

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// add routes
app.use(express.static('app'));
routes(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
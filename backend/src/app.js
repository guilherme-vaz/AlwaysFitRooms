// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { routes } = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:8885', // URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  }));
app.use(cors())
app.use(bodyParser.json());

const allRoutes = require("./routes");
app.use("/alwaysFitAPI", allRoutes);

 
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});

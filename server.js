const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jenosizeController = require('./controller/jenosize')
    app.use(cors());
    app.use(bodyParser.json());
    app.post('/Game_24', jenosizeController.getGame24);
    app.post('/Place_Details', jenosizeController.getDetailRestaurant);
    app.listen('3000',() => {
    console.log('start port 3000');
    })


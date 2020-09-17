const { response } = require('express');
var findRestaurantService = require('../service/find_restaurant')    
var game24Service = require('../service/game_24')

exports.getGame24 =  (req, res) => {
    const body = req.body.number;
    const response = game24Service.getGame24(body) ? "YES" : "NO"
    return res.send(response);
}
exports.getDetailRestaurant = async(req, res) => {
    const body = req.body.name
    const response = await findRestaurantService.getDetailRestaurant(body)
    return res.send(response)
}
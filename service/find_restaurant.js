const Places = require("google-places-web").default;

exports.getDetailRestaurant = async(query) => {
    Places.apiKey = "AIzaSyDEAH_xFeE0kDZkEPJIviv51jZB0cCMec0";
    Places.debug = false;
    if(query === "") return "not found";
    try {
        const placeSearch = await Places.textsearch({query: query});
        const { status, results:resultSearchPlace } = placeSearch;
        let getAllID = resultSearchPlace.map(data => data.place_id);
        let getAllDetailPlace = [];
        for(let value of getAllID) {
            let getDetailPlace = await Places.details({ placeid: value });
            getAllDetailPlace.push(getDetailPlace.result);
        }
        return getAllDetailPlace;
    } catch (error) {
        console.log(error);
        return "not found";
        };
    
};
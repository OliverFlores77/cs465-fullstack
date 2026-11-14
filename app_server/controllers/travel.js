// the address of the api and the options for the fetch call
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

// the old way of reading the trips from the json file, not used anymore
// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

/* GET travel view */
// async so the function can wait for the api to answer
const travel = async function(req, res, next) {
    // console.log('TRAVEL CONTROLLER BEGIN');
    await fetch(tripsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            // checks the data that came back from the api
            let message = null;
            if (!(json instanceof Array)) {
                message = 'API lookup error';
                json = [];
            } else {
                if (!json.length) {
                    message = 'No trips exist in our database!';
                }
            }
            res.render('travel', { title: 'Travlr Getaways', trips: json, message });
        })
        .catch((err) => res.status(500).send(err.message));
};

// lets other files use the travel function
module.exports = {
    travel
};

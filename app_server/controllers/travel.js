// needed to read files from the computer
var fs = require('fs');
// reads the trips data from the json file
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
// this function sends the travel page and the trips data to the browser
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips });
};

// lets other files use the travel function
module.exports = {
    travel
};
/* GET travel view */
// this function sends the travel page to the browser
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways' });
};

// lets other files use the travel function
module.exports = {
    travel
};
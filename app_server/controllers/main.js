/* GET Homepage */
// this function sends the index page to the browser
const index = (req, res) => {
    res.render('index', { title: "Travlr Getaways" });
};

// lets other files use the index function
module.exports = {
    index
};
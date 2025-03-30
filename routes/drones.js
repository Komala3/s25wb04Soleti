var express = require('express');
var router = express.Router();

// Sample data for drones (replace with database data if needed)
const drones = [
    { model: 'DJI Phantom 4', range_km: 5 },
    { model: 'Parrot Anafi', range_km: 4 },
    { model: 'Autel Evo II', range_km: 9 }
];

// Define the route and pass 'drones' to the view
router.get('/', function(req, res, next) {
    res.render('drones', { drones: drones }); // ✅ Pass drones to Pug
});

module.exports = router;

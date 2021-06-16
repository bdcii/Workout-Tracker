//Dependencies
const router = require('express').Router();
const db = require('../models/');


//Route to get all previous workouts
router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(data => {
            console.log('Workouts retrieved!');
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Route to add workout
router.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body)
        .then(data => {
            console.log('Workout added!');
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});







module.exports = router;
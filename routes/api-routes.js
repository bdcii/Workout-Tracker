//Dependencies
const router = require('express').Router();
const { Workout } = require('../models/');
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

//Route to update a workout by id
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        {_id: req.params.id}, {$push: {exercises: req.body}}
    ).then((data) => {
        console.log('Workout has been UPDATED!');
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//Route to get last 7 workouts
router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    .sort({_id: -1}).limit(7)
    .then((data) => {
        console.log('Workouts retrieved!');
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})


module.exports = router;
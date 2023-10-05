const express = require('express');
const workout = require('../models/WorkoutModel');

const router = express.Router();

// get all workouts
router.get('/', (req, res) => {
    res.send('workouts');
});

// get single workouts
router.get('/:id', (req, res) => {
    res.send('get workouts by id');
});

// post new workouts
router.post('/', async (req, res) => {
    const {title, reps, load} = req.body;
    try {
        const wk = await workout.create({title, reps, load});
        res.status(200).json(wk);
    }
    catch(er) {
            res.status(400).json({error: er.message});
    }


});


// update
router.patch('/:id', (req, res) => {
    res.send('update workouts');
});


// delete
router.delete('/:id', (req, res) => {
    res.send('delete workouts by id');
});


module.exports = router;
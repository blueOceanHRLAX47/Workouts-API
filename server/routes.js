const router = require('express').Router();
const controller = require('./controller.js');

router.get('/', controller.getAllWorkouts);
router.get('/savedworkouts', controller.getSavedWorkouts);
router.post('/savedworkouts', controller.saveWorkout);
router.get('/oneworkout/:workout_id', controller.getOneWorkout);

module.exports = router;
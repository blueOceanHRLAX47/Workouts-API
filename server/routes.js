const router = require('express').Router();
const controller = require('./controller.js');

router.get('/', controller.getAllWorkouts);
router.get('/savedworkouts/:user_id', controller.getSavedWorkouts);
router.get('/oneworkout/:workout_id', controller.getOneWorkout);
router.post('/savedworkouts', controller.saveWorkout);

module.exports = router;
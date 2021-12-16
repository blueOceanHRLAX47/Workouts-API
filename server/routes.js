const router = require('express').Router();
const controller = require('./controller.js');

router.get('/', controller.getAllWorkouts);
router.get('/oneworkout/:workout_id', controller.getOneWorkout);
router.get('/savedworkouts', controller.getSavedWorkouts);
router.post('/savedworkouts', controller.saveWorkout);
router.put('/savedworkouts', controller.updateWorkout);
router.delete('/savedworkouts', controller.deleteWorkout);

module.exports = router;
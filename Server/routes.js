const router = require('express').Router();
const controller = require('./controller.js');

router.get('/', controller.getWorkouts);
router.get('/saved/:user_id', controller.getUserSavedWorkouts);
router.post('/saved/:user_id', controller.saveWorkout);

module.exports = router;
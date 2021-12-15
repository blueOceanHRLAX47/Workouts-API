const { Workout, Exercise, Saved_workout, Workout_exercise } = require('../database/index.js');

module.exports = {
  getAllWorkouts:(req, res) => {
    Workout.findAll({
      include:
        {
          model:Workout_exercise,
          attributes:['id', 'exercise_id', 'sets', 'reps'],
          include: {
            model: Exercise,
          }
        },
      limit: 10
    })
    .then(results => {
      //console.log('Successfully get all workouts');
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  getSavedWorkouts: (req, res) => {
    const user_id = req.body.user.id;
    //console.log('user id:', user_id);

    Saved_workout.findAll({
      where: {user_id: user_id},
      include:{
        model: Workout,
        include: {
            model:Workout_exercise,
            attributes:['id', 'exercise_id', 'sets', 'reps'],
            include: {
              model: Exercise,
            }
        },
      }
    })
    .then(results => {
      //console.log('Successfully get user saved workouts');
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  getOneWorkout: (req, res) => {
    const workout_id = req.params.workout_id;
    //console.log('workout_id:', workout_id);
    Workout.findByPk(workout_id, {
      include:
        {
          model:Workout_exercise,
          attributes:['id', 'exercise_id', 'sets', 'reps'],
          include: {
            model: Exercise,
          }
        },
      limit: 10
    })
    .then(results => {
      //console.log('Successfully get one workout');
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  saveWorkout: (req, res) => {
    const {user, workout_id, time_on_calendar} = req.body;
    // console.log('req.body', req.body);
    Saved_workout.create({
      user_id: user.id,
      workout_id: workout_id,
      time_on_calendar: time_on_calendar
    })
      .then(() => {
        //console.log('Successfully save a new workouts!');
        res.status(200).send('Successfully save a new workouts!');
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }
}
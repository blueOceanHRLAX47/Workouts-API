const { Workout, Exercise, Saved_workout, Workout_exercise } = require('../Database/index.js');

module.exports = {
  getAllWorkouts:(req, res) => {
    Workout.findAll({
      include:
        {
          model:Workout_exercise,
          attributes:['id', 'sets', 'reps'],
          include: {
            model: Exercise,
          }
        },
          // attributes: ['id','name','video'],
          // through: {
          //   as:'count',
          //   attributes: ['id','sets','reps'],
          // }
    })
    .then(results => {
      console.log('Successfully get all workouts');
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  getUserSavedWorkouts: (req, res) => {
    const id = req.params.user_id;
    console.log('user id:', id);
    Saved_workout.findAll({
      where:{
        user_id: id
      }
    })
      .then(results => {
        console.log('Successfully get user saved workouts');
        res.status(200).send(results);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  saveWorkout: (req, res) => {
    const user_id = req.params.user_id;
    const {workout_id, time_on_calendar} = req.body;
    console.log('user_id', user_id);
    console.log('workout_id', workout_id);

    Saved_workout.create({
      user_id: user_id,
      workout_id: workout_id,
      time_on_calendar : time_on_calendar
    })
      .then(() => {
        console.log('Successfully save a new workouts!');
        res.status(200).send('Successfully save a new workouts!');
      })
      .catch(err => {
        res.status(404).send(err);
      })

  }
}
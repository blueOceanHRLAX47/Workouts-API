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
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  getSavedWorkouts: (req, res) => {
    const user_id = req.body.user.id;
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
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  getOneWorkout: (req, res) => {
    const workout_id = req.params.workout_id;
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
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  saveWorkout: (req, res) => {
    const {user, workout_id, time_on_calendar} = req.body;
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
  },

  updateWorkout: (req, res) => {
    const {user, savedWorkout_id, time_on_calendar} = req.body;
    Saved_workout.update({
      time_on_calendar: time_on_calendar
    }, {
      where: {
        id: savedWorkout_id
      }
    })
      .then(() => {
        res.status(200).send(`Successfully update the workouts!, savedWorkout_id = ${savedWorkout_id}`);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  deleteWorkout: (req, res) => {
    const {user, savedWorkout_id} = req.body;
    Saved_workout.destroy({
      where: {
        id: savedWorkout_id
      }
    })
      .then(() => {
        res.status(200).send(`Successfully delete the workouts!, savedWorkout_id = ${savedWorkout_id}`);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }
}
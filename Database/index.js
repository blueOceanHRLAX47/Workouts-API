const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('fbc', 'postgres', 'postgres', {
  host: '35.236.62.7',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(
    console.log('Successfully connect to database!')
  )
  .catch(err => {
    console.log(err)
  });

sequelize.sync({
  force: false
});

const Workout = sequelize.define('workouts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    likes: {
      type: DataTypes.INTEGER,
    },
    duration: {
      type: DataTypes.STRING,
    },
    body_group: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    description: {
      type: DataTypes.STRING,
    },
    equipment: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    }
  }, {
    timestamp: false,
    createdAt: false,
    updatedAt: false
  });

const Saved_workout = sequelize.define('saved_workouts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
    },
    workout_id: {
      type: DataTypes.STRING,
    },
    time_on_calendar: {
      type: DataTypes.STRING,
    },
  }, {
    timestamp: false,
    createdAt: false,
    updatedAt: false
  });


const Exercise = sequelize.define('exercises', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    video: {
      type: DataTypes.STRING,
    },
  }, {
    timestamp: false,
    createdAt: false,
    updatedAt: false
  });

const Workout_exercise = sequelize.define('workout_exercises', {
    workout_id: {
      type: DataTypes.INTEGER,
    },
    exercise_id: {
      type: DataTypes.INTEGER,
    },
    sets: {
      type: DataTypes.INTEGER,
    },
    reps: {
      type: DataTypes.STRING,
    },
  }, {
    timestamp: false,
    createdAt: false,
    updatedAt: false
  });

// Workouts.hasMany(Workout_exercises, {foreignKey:'workout_id'});
// Workout_exercises.belongsTo(Exercises, {foreignKey:'exercise_id'});
Workout.belongsToMany(Exercise, {through: Workout_exercise, foreignKey: 'exercise_id'});
Exercise.belongsToMany(Workout, {through: Workout_exercise, foreignKey: 'workout_id'});

module.exports = {
  Workout,
  Workout_exercise,
  Saved_workout,
  Exercise
};


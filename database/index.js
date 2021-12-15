const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('fbc', 'postgres', 'postgres', {
  host: '10.49.144.4', // private
  //host: '35.236.62.7', // public
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
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    equipment: {
      type: DataTypes.STRING,
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
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
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

Workout.hasMany(Workout_exercise, {foreignKey:'workout_id'});
Workout_exercise.hasOne(Exercise,{foreignKey:'id', sourceKey:'exercise_id'});

// Workout.hasMany(Saved_workout, {foreign:'workout_id'});
Saved_workout.hasOne(Workout, {foreignKey:'id', sourceKey:'workout_id'});


module.exports = {
  Workout,
  Workout_exercise,
  Saved_workout,
  Exercise
};


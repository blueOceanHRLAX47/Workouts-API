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
})

const Workout = sequelize.define('workout', {
  user_id_created: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  popularity_score: {
    type: DataTypes.INTEGER,
  },
  likes: {
    type: DataTypes.INTEGER,
  }
}, {
  timestamp: false,
  createdAt: false,
  updatedAt: false
})


module.exports = {
  sequelize,
  Workout,
};
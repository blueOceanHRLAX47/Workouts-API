const { Workout } = require('../Database/index.js');

module.exports = {
  getAll:(req, res) => {
    Workout.findAll()
    .then(results => {
      res.status(201).send(results)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },

  postOne:(req, res) => {
    console.log(req.body);
    Workout.create(req.body)
      .then(results => {
        res.status(201).send('Succefully post the new workout!')
      })
      .catch(err => {
        res.status(404).send(err)
      });
  },
}
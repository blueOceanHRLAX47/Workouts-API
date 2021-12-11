const router = require('express').Router();
const controller = require('./controller.js');

router.get('/', controller.getAll);
router.post('/', controller.postOne);


module.exports = router;
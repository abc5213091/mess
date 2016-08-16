var express = require('express');
var router = express.Router();

var Article = require('../DB/controllers/Article')

router.get('/', Article.list);
router.get('/:id', Article.getListByID);
router.post('/save', Article.save);
router.delete('/del', Article.del);

module.exports = router;

// zavislosti
const controller = require('../controllers/postscontroller.js');

const router = require('express').Router();


router.get('/:id', controller.showPost);
router.get('/', controller.allPosts);

module.exports = router;
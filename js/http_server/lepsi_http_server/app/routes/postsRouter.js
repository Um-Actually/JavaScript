// zavislosti
const controller = require('../controllers/postscontroller.js');

const router = require('express').Router();


router.get('/:id', controller.showPost);
router.get('/', controller.allPosts);
router.get('/delete/:id', controller.deletePost);
router.post('/new', controller.addPost);

module.exports = router;
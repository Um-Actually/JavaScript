const router = require('express').Router();
const model = require('../models/postsModel.js');
const controller = require('../controllers/defaultController.js');




router.get(['/','/index'], controller.index);
router.get(['/menu'], controller.menu);
router.get(['/kontakt'], controller.kontakt);



router.use('/posts', require('./postsRouter.js'));


router.use('/users', require('./usersRouter.js'));

// vsechny ostatni URL jsou chyba
router.use((req, res) => {
    res.status(404).render('error', {
        titulek: 'Stránka nebyla nalezena',
    });
});

// exportovani routeru pro pouziti v aplikaci
module.exports = router;
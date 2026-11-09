const router = require('express').Router();
const model = require('../models/postsModel.js');
const controller = require('../controllers/defaultcontroller.js');




router.get(['/','/index'], controller.index);
router.get(['/menu'], controller.menu);
router.get(['/kontakt'], controller.kontakt);



router.use('/posts', require('./postsRouter.js'));



// vsechny ostatni URL jsou chyba
router.use((req, res) => {
    res.render('error');
});

// exportovani routeru pro pouziti v aplikaci
module.exports = router;
const router = require('express').Router();
const model = require('../models/postsModel.js');


router.get('/kontakt', (req, res) => {
	res.render('kontakt');
});


router.get('/menu', (req, res) => {
	res.render('menu', {
		'title': 'Menu',
	});
});


router.get(['/','/index'], (req, res) => {
	res.render('index', {
		'title': 'Domovská stránka'
	});
});


router.get('/posts/:id', (req, res) => {
	const id = req.params.id;
	const prispevek = model.nacistPrispevek(id);

	res.render('post', {
		titulek: 'Příspěvek',
		prispevek: prispevek,})
});


router.get('/posts', (req, res) => {
	res.render('posts', {
		titulek: 'Příspěvky',
		prispevky: model.nacistPrispevky(),
	});
});

// vsechny ostatni URL jsou chyba
router.use((req, res) => {
    res.render('error');
});

// exportovani routeru pro pouziti v aplikaci
module.exports = router;
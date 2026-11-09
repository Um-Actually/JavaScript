const router = require('express').Router();

// custom URL s custom odpovedi
router.get('/kontakt', (req, res) => {
	res.render('kontakt');
});
router.get('/menu', (req, res) => {
	res.render('menu', {
		menu:[
			
		]
	}

	);
});


router.get(['/','/index'], (req, res) => {
	res.render('index', {
		'title': 'Domovská stránka'
	});
});

// vsechny ostatni URL jsou chyba
router.use((req, res) => {
    res.render('error');
});

// exportovani routeru pro pouziti v aplikaci
module.exports = router;
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

router.get('/posts', (req, res) => {
	res.render('posts', {
		titulek: 'Příspěvky',
		prispevky: [
			{ id: 1, nadpis: 'První příspěvek', obsah: 'Toto je první příspěvek.' },
			{ id: 2, nadpis: 'Druhý příspěvek', obsah: 'Toto je druhý příspěvek.' },
			{ id: 3, nadpis: 'Třetí příspěvek', obsah: 'Toto je třetí příspěvek.' },
		],
	});
});

// vsechny ostatni URL jsou chyba
router.use((req, res) => {
    res.render('error');
});

// exportovani routeru pro pouziti v aplikaci
module.exports = router;
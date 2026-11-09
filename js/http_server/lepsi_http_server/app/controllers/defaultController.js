
exports.index = (req, res) => {
	res.render('index', {
		titulek: 'Můj web',
	});
}

exports.menu = (req, res) => {
	res.render('menu', {
		titulek: 'menu',
	});
}

exports.kontakt = (req, res) => {
	res.render('kontakt', {
		titulek: 'kontakt',
	});
}


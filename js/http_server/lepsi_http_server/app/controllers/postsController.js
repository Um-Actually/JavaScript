
const model = require('../models/postsModel.js');


exports.showPost = (req, res) => {
	
	const id = req.params.id;
	const prispevek = model.nacistPrispevek(id);

	res.render('post', {
		titulek: 'Příspěvek',
		prispevek: prispevek,
	});
}

exports.allPosts = (req, res) => {
	res.render('posts', {
		titulek: 'Příspěvky',
		prispevky: model.nacistPrispevky(),
	});
}
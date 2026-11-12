
const model = require('../models/postsModel.js');

exports.allPosts = (req, res) => {
	res.render('posts', {
		titulek: 'Příspěvky',
		prispevky: model.nacistPrispevky(),
	});
}


exports.showPost = (req, res) => {
	
	const id = req.params.id;
	const prispevek = model.nacistPrispevek(id);

	res.render('post', {
		titulek: 'Příspěvek',
		prispevek: prispevek,
	});
}


exports.deletePost = (req, res) => {
    const id = req.params.id;
    model.smazatPrispevek(id);
    res.redirect('/posts');
}

exports.addPost = (req, res) => {
    const nadpis = req.body.nadpis;
    const obsah = req.body.obsah;

    if(!nadpis || !obsah) {
        return res.redirect('/posts');
    }

    model.pridatPrispevek(nadpis, obsah);
    res.redirect('/posts');
}
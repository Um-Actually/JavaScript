
const jsondb = require('simple-json-db');

const db = new jsondb('../lepsi_http_server/data/posts.json');
exports.nacistPrispevky = () => {
    return db.JSON();
}

exports.nacistPrispevek = (id) => {
    const prispevky = db.JSON();

    for(let i = 0; i < prispevky.length; i++) {
        if(prispevky[i].id == id) {
            return prispevky[i];
        }
    }

    return false;
}; 
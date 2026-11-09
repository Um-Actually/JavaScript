
const jsondb = require('simple-json-db');

const db = new jsondb('../lepsi_http_server/data/posts.json');
exports.nacistPrispevky = () => {
    return db.JSON();
}
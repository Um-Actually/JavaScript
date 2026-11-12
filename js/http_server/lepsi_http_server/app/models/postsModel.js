
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
}

exports.smazatPrispevek = (id) => {
    const prispevky = db.JSON();

    for(let i = 0; i < prispevky.length; i++) {
        if(prispevky[i].id == id) {
            prispevky.splice(i, 1);
            db.JSON(prispevky);
            db.sync();
            return true;
        }
    }

    return false;
}

exports.pridatPrispevek = (nadpis, obsah) => {
    const prispevky = db.JSON();

    // urceni noveho ID
    let noveId = 1;
    if(prispevky.length > 0) {
        noveId = prispevky[prispevky.length - 1].id + 1;
    }

    prispevky.push({
        id: noveId,
        nadpis,
        obsah,
    });

    db.JSON(prispevky);
    db.sync();
}
; 
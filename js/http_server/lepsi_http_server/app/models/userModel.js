const jsondb = require('simple-json-db');
const path = require('path');
const db = new jsondb(path.resolve(__dirname, '../../data/useres.json'));

exports.existujeUzivatel = (jmeno) => {
    return db.has(jmeno);
}

exports.spravneHeslo = (jmeno, heslo) => {
    if(!db.has(jmeno)) {
        return false;
    }

    return db.get(jmeno).heslo === heslo;
}

exports.pridatUzivatele = (jmeno, heslo) => {
    if(db.has(jmeno)) {
        return false;
    }

    db.set(jmeno, {
        heslo,
    });

    db.sync();
    return true;
}
const low = require('lowdb');
var path = require('path');
const FileSync = require('lowdb/adapters/FileSync');

let db = null;

function syncInit(){
    const adapter = new FileSync(path.join(__dirname, '/products.json'));
    db = low(adapter);
    db.defaults({ prods: []}).write();
}

syncInit();

module.exports = db;
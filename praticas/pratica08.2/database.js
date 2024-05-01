const { MongoClient } = require('mongodb');

let db = null;

const url = 'mongodb+srv://victor:11121991@cluster0.il1tiud.mongodb.net/';

async function conectarDb() {
    if (db) {
        return db;
    }

    const client = new MongoClient(url);
    await client.connect();
    db = client.db('agenda');
    return db;
}

module.exports = conectarDb;
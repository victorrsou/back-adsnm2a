const {MongoClient} = require('mongodb');

const url = "mongodb+srv://victor:11121991@cluster0.il1tiud.mongodb.net/"

var client = await MongoClient.connect(url)

async function conectarDb() {
    client.connect()
    return client.db('agenda')
}

module.exports = {conectarDb};
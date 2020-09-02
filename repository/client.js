const MongoDriverClient = require('mongodb').MongoClient;
const config = require("../config");

class MongoClient {

    constructor() {
        this.db = null
    }

    connect() {
        if (this.db != null)
            return Promise.resolve(this.db);
        else {
            return MongoDriverClient.connect(config.mongodb.uri)
                .then(client => {
                    this.db = client.db(config.mongodb.databaseName);
                    return this.db
                })
        }
    }

    find_all(collection_name) {
        return this.connect()
            .then(db => {
                return db.collection(collection_name).find({}).toArray()
            })
    }

    add(collection_name, db_object){
        return this.connect()
            .then(db => {
                return db.collection(collection_name).insertOne(db_object)
            })
    }
}

module.exports = new MongoClient();
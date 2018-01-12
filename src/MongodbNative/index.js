'use strict'

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

class MongodbNative {
  constructor (Config) {
    this.connStr = Config._config.database.mongodb.connection.string;
    this.database = Config._config.database.mongodb.connection.database;

    this.status = 'loading';
  }

  connect() {
    MongoClient.connect(this.connStr, function(err, client) {
      assert.equal(null, err);

      this.db = client.db(this.database);
      this.client = client;
      this.status = 'connected';

    }.bind(this));
  }

  close() {
    this.client.close();
  }
}

module.exports = MongodbNative

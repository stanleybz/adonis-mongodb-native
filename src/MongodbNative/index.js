'use strict'

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

class MongodbNative {
  constructor (Config) {
    this.connStr = Config._config.database.mongodb.connection.string;
    this.database = Config._config.database.mongodb.connection.database;

    this.status = 'loading';

    this.connect = this.connect.bind(this);
    this.close = this.close.bind(this);
  }

  connect() {
    MongoClient.connect(this.connStr, function(err, client) {
      if (err) {
        console.log(err);
        this.status = 'error';
      } else {
        this.db = client.db(this.database);
        this.client = client;
        this.status = 'connected';
      }
    }.bind(this));
  }

  close() {
    this.client.close();
  }
}

module.exports = MongodbNative

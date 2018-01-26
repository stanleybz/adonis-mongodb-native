'use strict'

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

class MongodbNative {
  constructor (Config) {
    this.connStr = Config._config.database.mongodb.connection.string;
    this.database = Config._config.database.mongodb.connection.database;

    this.status = 'loading';
    this.db = { collection: null }
    
    this.connect = this.connect.bind(this);
    this.close = this.close.bind(this);
  }

  connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.connStr, function(err, client) {
        if (err) {
          reject(err)
          this.status = 'error';
        } else {
          this.db = client.db(this.database);
          this.client = client;
          this.status = 'connected';
          resolve(client);
        }
      }.bind(this));
    });
  }

  close() {
    this.client.close();
  }
}

module.exports = MongodbNative

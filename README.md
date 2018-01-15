# adonis-mongodb-native

Simple tools to connect Adonisjs application to node-mongodb-native

### 🚧 working in progress 🚧

## How to use

###  Add provider to start/app.js
```
const providers = [
    ...,
    'adonis-mongodb-native/providers/MongodbNativeProvider'
]
```

### Add aliases to start/app.js
```
const aliases = {
    ...,
    mongodb: 'adonis-mongodb-native',
}
```

###  Add database config to config/database.js
Temporary just support `CONNECTION STRING`
```
mongodb: {
    connection: {
        string: Env.get('MONGO_CONNECTION_STRING'),
        database: Env.get('MONGO_DATABASE'),
    }
}
```

### Connect mongodb when application start on start/routes.js
```
const mongodb = use('mongodb').connect();
```

### Use it in your application
```
const mongodb = use('mongodb');
mongodb.xxxx
```

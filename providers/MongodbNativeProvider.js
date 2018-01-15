const { ServiceProvider } = use('@adonisjs/fold')

class MongodbNativeProvider extends ServiceProvider {
  register () {
    this.app.singleton('adonis-mongodb-native', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('../src/MongodbNative'))(Config)
    })
  }
}

module.exports = MongodbNativeProvider

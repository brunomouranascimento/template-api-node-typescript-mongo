import Mongoose from 'mongoose'

const connect = () => {
  Mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
    .then(() => {
      return console.info('✅ - Connected to Database')
    })
    .catch(error => {
      console.error(
        `❌ - An error has ocurred on connecting to Database: ${error.message}`
      )
      return process.exit(1)
    })
}
connect()

Mongoose.connection.on('disconnected', connect)

export default Mongoose

import Mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connect = () => {
  Mongoose.connect(process.env.DATABASE || 'LOCALDATABASE', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
    .then(() => {
      return console.log('✅ - Connected to Database');
    })
    .catch(error => {
      console.log(
        `❌ - An error has ocurred on connecting to Database: ${error.message}`,
      );
      return process.exit(1);
    });
};
connect();

Mongoose.connection.on('disconnected', connect);

export default Mongoose;
